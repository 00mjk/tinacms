/**



*/

import React from 'react'
import { useEffect, useState } from 'react'
import { useCMS } from '../../react-tinacms/use-cms'
import {
  BiArrowToBottom,
  BiCloudUpload,
  BiGridAlt,
  BiListUl,
  BiX,
} from 'react-icons/bi'
import { Modal, ModalBody, FullscreenModal } from '../../packages/react-modals'
import { BiFile } from 'react-icons/bi'
import {
  MediaList,
  Media,
  MediaListOffset,
  MediaListError,
} from '../../packages/core'
import { Button, IconButton } from '../../packages/styles'
import { useDropzone } from 'react-dropzone'
import { CursorPaginator } from './pagination'
import { ListMediaItem, GridMediaItem } from './media-item'
import { Breadcrumb } from './breadcrumb'
import { LoadingDots } from '../../packages/form-builder'
import { IoMdSync } from 'react-icons/io'
import { CloseIcon, TrashIcon } from '../../packages/icons'
import {
  absoluteImgURL,
  DEFAULT_MEDIA_UPLOAD_TYPES,
  dropzoneAcceptFromString,
  isImage,
} from './utils'
import { DeleteModal, SyncModal } from './modal'
import { CopyField } from './copy-field'

// taken from https://davidwalsh.name/javascript-polling
async function poll(
  fn: () => Promise<{
    complete: boolean
    status: {
      [key: string]: boolean
    }
  }>,
  timeout,
  interval
) {
  const endTime = Number(new Date()) + (timeout || 2000)
  interval = interval || 100

  const checkCondition = async function (resolve, reject) {
    // If the condition is met, we're done!
    const result = await fn()
    if (result.complete) {
      resolve(result)
    }
    // If the condition isn't met but the timeout hasn't elapsed, go again
    else if (Number(new Date()) < endTime) {
      setTimeout(checkCondition, interval, resolve, reject)
    }
    // Didn't match and too much time, reject!
    else {
      reject(new Error('Time out error'))
    }
  }

  return new Promise(checkCondition)
}

// Can not use path.join on the frontend
const join = function (...parts) {
  // From: https://stackoverflow.com/questions/29855098/is-there-a-built-in-javascript-function-similar-to-os-path-join
  /* This function takes zero or more strings, which are concatenated
  together to form a path or URL, which is returned as a string. This
  function intelligently adds and removes slashes as required, and is
  aware that `file` URLs will contain three adjacent slashes. */

  const [first, last, slash] = [0, parts.length - 1, '/']

  const matchLeadingSlash = new RegExp('^' + slash)
  const matchTrailingSlash = new RegExp(slash + '$')

  parts = parts.map(function (part, index) {
    if (index === first && part === 'file://') return part

    if (index > first) part = part.replace(matchLeadingSlash, '')

    if (index < last) part = part.replace(matchTrailingSlash, '')

    return part
  })

  return parts.join(slash)
}

export interface MediaRequest {
  directory?: string
  onSelect?(_media: Media): void
  close?(): void
  allowDelete?: boolean
}

export function MediaManager() {
  const cms = useCMS()

  const [request, setRequest] = useState<MediaRequest | undefined>()

  useEffect(() => {
    return cms.events.subscribe('media:open', ({ type, ...request }) => {
      setRequest(request)
    })
  }, [])

  if (!request) return null

  const close = () => setRequest(undefined)

  return (
    <Modal>
      <FullscreenModal>
        <div className="w-full bg-gray-50 flex items-center justify-between px-5 pt-3 m-0">
          <h2 className="text-gray-500 font-sans font-medium text-base leading-none m-0 block truncate">
            Media Manager
          </h2>
          <div
            onClick={close}
            className="flex items-center fill-gray-400 cursor-pointer transition-colors duration-100 ease-out hover:fill-gray-700"
          >
            <CloseIcon className="w-6 h-auto" />
          </div>
        </div>
        <ModalBody className="flex h-full flex-col">
          <MediaPicker {...request} close={close} />
        </ModalBody>
      </FullscreenModal>
    </Modal>
  )
}

type MediaListState = 'loading' | 'loaded' | 'error' | 'not-configured'

const defaultListError = new MediaListError({
  title: 'Error fetching media',
  message: 'Something went wrong while requesting the resource.',
  docsLink: 'https://tina.io/docs/media/#media-store',
})

export function MediaPicker({
  allowDelete,
  onSelect,
  close,
  ...props
}: MediaRequest) {
  const cms = useCMS()
  const [listState, setListState] = useState<MediaListState>(() => {
    if (cms.media.isConfigured) return 'loading'
    return 'not-configured'
  })

  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false)
  const [listError, setListError] = useState<MediaListError>(defaultListError)
  const [directory, setDirectory] = useState<string | undefined>(
    props.directory
  )

  const [list, setList] = useState<MediaList>({
    items: [],
    nextOffset: undefined,
  })

  const [showSync, setShowSync] = useState(false)

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [activeItem, setActiveItem] = useState<Media | false>(false)
  const closePreview = () => setActiveItem(false)

  /**
   * current offset is last element in offsetHistory[]
   * control offset by pushing/popping to offsetHistory
   */
  const [offsetHistory, setOffsetHistory] = useState<MediaListOffset[]>([])
  const [loadingText, setLoadingText] = useState('')
  const offset = offsetHistory[offsetHistory.length - 1]
  const resetOffset = () => setOffsetHistory([])
  const navigateNext = () => {
    if (!list.nextOffset) return
    setOffsetHistory([...offsetHistory, list.nextOffset])
  }
  const navigatePrev = () => {
    const offsets = offsetHistory.slice(0, offsetHistory.length - 1)
    setOffsetHistory(offsets)
  }
  const hasPrev = offsetHistory.length > 0
  const hasNext = !!list.nextOffset

  const isLocal = cms.api.tina.isLocalMode

  const hasTinaMedia =
    Object.keys(cms.api.tina.schema.schema?.config?.media?.tina || {}).includes(
      'mediaRoot'
    ) &&
    Object.keys(cms.api.tina.schema.schema?.config?.media?.tina || {}).includes(
      'publicFolder'
    )
  const folder = hasTinaMedia
    ? join(
        cms.api.tina.schema.schema?.config?.media?.tina.publicFolder,
        cms.api.tina.schema.schema?.config?.media?.tina.mediaRoot
      )
    : ''
  const branch = cms.api.tina?.branch

  function loadMedia() {
    setListState('loading')
    cms.media
      .list({
        offset,
        limit: cms.media.pageSize,
        directory,
        thumbnailSizes: [
          { w: 75, h: 75 },
          { w: 400, h: 400 },
          { w: 1000, h: 1000 },
        ],
      })
      .then((list) => {
        setList(list)
        setListState('loaded')
      })
      .catch((e) => {
        console.error(e)
        if (e.ERR_TYPE === 'MediaListError') {
          setListError(e)
        } else {
          setListError(defaultListError)
        }
        setListState('error')
      })
  }

  useEffect(() => {
    if (!cms.media.isConfigured) return
    loadMedia()

    return cms.events.subscribe(
      ['media:upload:success', 'media:delete:success', 'media:pageSize'],
      loadMedia
    )
  }, [offset, directory, cms.media.isConfigured])

  const onClickMediaItem = (item: Media) => {
    if (!item) {
      setActiveItem(false)
    } else if (item.type === 'dir') {
      // Only join when there is a directory to join to
      setDirectory(
        item.directory === '.' || item.directory === ''
          ? item.filename
          : join(item.directory, item.filename)
      )
      resetOffset()
    } else {
      setActiveItem(item)
    }
  }

  let deleteMediaItem: (_item: Media) => void
  if (allowDelete) {
    deleteMediaItem = (item: Media) => {
      cms.media.delete(item)
    }
  }

  let selectMediaItem: (_item: Media) => void

  if (onSelect) {
    selectMediaItem = (item: Media) => {
      onSelect(item)
      if (close) close()
    }
  }

  const [uploading, setUploading] = useState(false)
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: dropzoneAcceptFromString(
      cms.media.accept || DEFAULT_MEDIA_UPLOAD_TYPES
    ),
    multiple: true,
    onDrop: async (files) => {
      try {
        setUploading(true)
        await cms.media.persist(
          files.map((file) => {
            return {
              directory: directory || '/',
              file,
            }
          })
        )
      } catch {
        // TODO: Events get dispatched already. Does anything else need to happen?
      }
      setUploading(false)
    },
  })

  const syncMedia = async () => {
    if (hasTinaMedia) {
      const res = await cms.api.tina.syncTinaMedia()
      if (res?.assetsSyncing) {
        // it was successful
        try {
          setListState('loading')
          // poll every 3 seconds until it is done
          await poll(
            async () => {
              const status = await cms.api.tina.checkSyncStatus({
                assetsSyncing: res.assetsSyncing,
              })
              const totalDone = Object.values(status.status).filter(
                Boolean
              )?.length
              const total = Object.keys(status.status)?.length
              setLoadingText(`${totalDone}/${total} Media items loaded`)
              return status
            },
            // Will time out after 60 seconds
            60000,
            3000
          )
          setLoadingText('')
          // refresh the media
          loadMedia()
        } catch (e) {
          cms.alerts.error(
            'Error in syncing media, check console for more details'
          )
          console.error("'Error in syncing media, check below for more details")
          console.error(e)
        }
      } else {
        // it was not
        cms.alerts.warn(
          'Whoops, Looks media is not set up correctly in Tina Cloud. Check console for more details'
        )
        console.warn(
          'Whoops, Looks media is not set up correctly. Check below for more details'
        )
        console.warn(res)
      }
    }
  }

  const { onClick, ...rootProps } = getRootProps()

  function disableScrollBody() {
    const body = document?.body
    body.style.overflow = 'hidden'

    return () => {
      body.style.overflow = 'auto'
    }
  }

  useEffect(disableScrollBody, [])

  if (listState === 'loading' || uploading) {
    return <LoadingMediaList extraText={loadingText} />
  }

  if (listState === 'not-configured') {
    return (
      <DocsLink
        title="No Media Store Configured"
        message="To use the media manager, you need to configure a Media Store."
        docsLink="https://tina.io/docs/reference/media/overview/"
      />
    )
  }

  if (listState === 'error') {
    const { title, message, docsLink } = listError
    return <DocsLink title={title} message={message} docsLink={docsLink} />
  }

  return (
    <>
      {deleteModalOpen && (
        <DeleteModal
          filename={activeItem ? activeItem.filename : ''}
          deleteFunc={() => {
            if (activeItem) {
              deleteMediaItem(activeItem)
              setActiveItem(false)
            }
          }}
          close={() => setDeleteModalOpen(false)}
        />
      )}

      <MediaPickerWrap>
        <div className="flex items-center bg-gray-50 border-b border-gray-150 gap-x-4 py-3 px-5 shadow-sm flex-shrink-0">
          {/* viewMode toggle */}
          <div
            className={`grow-0 flex divide-x divide-gray-150 shadow-inner bg-gray-50 border border-gray-150 justify-between rounded-md`}
          >
            <button
              className={`relative whitespace-nowrap flex items-center justify-center flex-1 block font-medium text-base px-2.5 py-1 transition-all ease-out duration-150 rounded-l-md ${
                viewMode === 'grid'
                  ? 'bg-white text-blue-500 shadow'
                  : 'text-gray-400'
              }`}
              onClick={() => {
                setViewMode('grid')
              }}
            >
              <BiGridAlt className="w-6 h-full opacity-70" />
            </button>
            <button
              className={`relative whitespace-nowrap flex items-center justify-center flex-1 block font-medium text-base px-2 py-1 transition-all ease-out duration-150 rounded-r-md ${
                viewMode === 'list'
                  ? 'bg-white text-blue-500 shadow'
                  : 'text-gray-400'
              }`}
              onClick={() => {
                setViewMode('list')
              }}
            >
              <BiListUl className="w-8 h-full opacity-70" />
            </button>
          </div>

          <Breadcrumb directory={directory} setDirectory={setDirectory} />
          {!isLocal && hasTinaMedia && (
            <Button
              // this button is only displayed when the data is not loading
              busy={false}
              variant="white"
              onClick={() => {
                setShowSync(true)
              }}
            >
              Sync <IoMdSync className="w-6 h-full ml-2 opacity-70" />
            </Button>
          )}
          <UploadButton onClick={onClick} uploading={uploading} />
        </div>

        <div className="flex h-full overflow-hidden bg-white">
          <div className="flex w-full flex-col h-full @container">
            <ul
              {...rootProps}
              className={`h-full grow overflow-y-auto transition duration-150 ease-out bg-gradient-to-b from-gray-50/50 to-gray-50 ${
                list.items.length === 0 ||
                (viewMode === 'list' &&
                  'w-full flex flex-1 flex-col justify-start -mb-px')
              } ${
                list.items.length > 0 &&
                viewMode === 'grid' &&
                'w-full p-4 gap-4 grid grid-cols-1 @sm:grid-cols-2 @lg:grid-cols-3 @2xl:grid-cols-4 @4xl:grid-cols-6 @6xl:grid-cols-8 auto-rows-auto content-start justify-start'
              } ${isDragActive ? `border-2 border-blue-500 rounded-lg` : ``}`}
            >
              <input {...getInputProps()} />

              {listState === 'loaded' && list.items.length === 0 && (
                <EmptyMediaList hasTinaMedia={hasTinaMedia} />
              )}

              {viewMode === 'list' &&
                list.items.map((item: Media) => (
                  <ListMediaItem
                    key={item.id}
                    item={item}
                    onClick={onClickMediaItem}
                    active={activeItem && activeItem.id === item.id}
                  />
                ))}

              {viewMode === 'grid' &&
                list.items.map((item: Media) => (
                  <GridMediaItem
                    key={item.id}
                    item={item}
                    onClick={onClickMediaItem}
                    active={activeItem && activeItem.id === item.id}
                  />
                ))}
            </ul>

            <div className="bg-gradient-to-r to-gray-50/50 from-gray-50 shrink-0 grow-0 border-t border-gray-150 py-3 px-5 shadow-sm z-10">
              <CursorPaginator
                hasNext={hasNext}
                navigateNext={navigateNext}
                hasPrev={hasPrev}
                navigatePrev={navigatePrev}
              />
            </div>
          </div>

          <ActiveItemPreview
            activeItem={activeItem}
            close={closePreview}
            selectMediaItem={selectMediaItem}
            allowDelete={allowDelete}
            deleteMediaItem={() => {
              setDeleteModalOpen(true)
            }}
          />
        </div>
      </MediaPickerWrap>
      {showSync && (
        <SyncModal
          folder={folder}
          branch={branch}
          syncFunc={syncMedia}
          close={() => {
            setShowSync(false)
          }}
        />
      )}
    </>
  )
}

const ActiveItemPreview = ({
  activeItem,
  close,
  selectMediaItem,
  deleteMediaItem,
  allowDelete,
}) => {
  const thumbnail = activeItem ? (activeItem.thumbnails || {})['1000x1000'] : ''
  return (
    <div
      className={`shrink-0 h-full flex flex-col items-start gap-3 overflow-y-auto bg-white border-l border-gray-100 bg-white shadow-md transition ease-out duration-150 ${
        activeItem
          ? `p-4 opacity-100 w-[35%] max-w-[560px] min-w-[240px]`
          : `translate-x-8 opacity-0 w-[0px]`
      }`}
    >
      {activeItem && (
        <>
          <div className="flex grow-0 shrink-0 gap-2 w-full items-center justify-between">
            <h3 className="text-lg text-gray-600 w-full max-w-full break-words block truncate flex-1">
              {activeItem.filename}
            </h3>
            <IconButton
              variant="ghost"
              className="group grow-0 shrink-0"
              onClick={close}
            >
              <BiX
                className={`w-7 h-auto text-gray-500 opacity-50 group-hover:opacity-100 transition duration-150 ease-out`}
              />
            </IconButton>
          </div>
          {isImage(thumbnail) ? (
            <div className="w-full max-h-[75%]">
              <img
                className="block border border-gray-100 rounded-md overflow-hidden max-w-full max-h-full object-fit h-auto shadow"
                src={thumbnail}
                alt={activeItem.filename}
              />
            </div>
          ) : (
            <span className="p-3 border border-gray-100 rounded-md overflow-hidden bg-gray-50 shadow">
              <BiFile className="w-14 h-auto fill-gray-300" />
            </span>
          )}
          <div className="grow h-full w-full shrink flex flex-col gap-3 items-start justify-start">
            <CopyField value={absoluteImgURL(activeItem.src)} label="URL" />
          </div>
          <div className="shrink-0 w-full flex flex-col justify-end items-start">
            <div className="flex w-full gap-3">
              {selectMediaItem && (
                <Button
                  size="medium"
                  variant="primary"
                  className="grow"
                  onClick={() => selectMediaItem(activeItem)}
                >
                  Insert
                  <BiArrowToBottom className="ml-1 -mr-0.5 w-6 h-auto text-white opacity-70" />
                </Button>
              )}
              {allowDelete && (
                <Button
                  variant="white"
                  size="medium"
                  className="grow max-w-[40%]"
                  onClick={deleteMediaItem}
                >
                  Delete
                  <TrashIcon className="ml-1 -mr-0.5 w-6 h-auto text-red-500 opacity-70" />
                </Button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

const UploadButton = ({ onClick, uploading }: any) => {
  return (
    <Button
      variant="primary"
      size="custom"
      className="text-sm h-10 px-6"
      busy={uploading}
      onClick={onClick}
    >
      {uploading ? (
        <LoadingDots />
      ) : (
        <>
          Upload <BiCloudUpload className="w-6 h-full ml-2 opacity-70" />
        </>
      )}
    </Button>
  )
}

const LoadingMediaList = (props) => {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center"
      {...props}
    >
      {props.extraText && <p>{props.extraText}</p>}
      <LoadingDots color={'var(--tina-color-primary)'} />
    </div>
  )
}

const MediaPickerWrap = ({ children }) => {
  return (
    <div className="h-full flex-1 text-gray-700 flex flex-col relative bg-gray-50 outline-none active:outline-none focus:outline-none">
      {children}
    </div>
  )
}

const EmptyMediaList = (props) => {
  return (
    <div className={`p-12 text-xl opacity-50 text-center`} {...props}>
      Drag and drop assets here
      {props.hasTinaMedia &&
        " or click 'Sync' to sync your media to Tina Cloud."}
    </div>
  )
}

const DocsLink = ({ title, message, docsLink, ...props }) => {
  return (
    <div className="h-3/4 text-center flex flex-col justify-center" {...props}>
      <h2 className="mb-3 text-xl text-gray-600">{title}</h2>
      <div className="mb-3 text-base text-gray-700">{message}</div>
      <a
        href={docsLink}
        target="_blank"
        rel="noreferrer noopener"
        className="font-bold text-blue-500 hover:text-blue-600 hover:underline transition-all ease-out duration-150"
      >
        Learn More
      </a>
    </div>
  )
}
