import * as React from 'react'
import { CMSContext } from '@tinacms/react-tinacms'
import { ModalProvider } from './modals/ModalProvider'
import { SidebarContext } from './sidebar/SidebarProvider'
import { cms } from '../index'
import styled, { ThemeProvider } from 'styled-components'
import { TinaReset, Theme, theme as DEFAULT_THEME } from '@tinacms/styles'
import { Sidebar } from './sidebar/Sidebar'
import { SIDEBAR_WIDTH } from '../Globals'

interface TinaProps {
  position: 'fixed' | 'float'
  hidden?: boolean
  theme?: Theme
}

export const Tina: React.FC<TinaProps> = ({
  children,
  position,
  hidden,
  theme = DEFAULT_THEME,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const props = {
    isOpen,
    setIsOpen,
    position,
    hidden,
  }

  return (
    <CMSContext.Provider value={cms}>
      <SidebarContext.Provider value={props}>
        <SiteWrapper open={isOpen} position={position}>
          {children}
        </SiteWrapper>
        {!hidden && (
          <ThemeProvider theme={theme}>
            <ModalProvider>
              <TinaReset>
                <Sidebar />
              </TinaReset>
            </ModalProvider>
          </ThemeProvider>
        )}
      </SidebarContext.Provider>
    </CMSContext.Provider>
  )
}

const SiteWrapper = styled.div<{ open: boolean; position: string }>`
  opacity: 1 !important;
  background-color: transparent !important;
  background-image: none !important;
  overflow: visible !important;
  position: absolute !important;
  top: 0 !important;
  right: 0 !important;
  height: 100% !important;
  width: ${props =>
    props.position === 'fixed' && props.open
      ? 'calc(100% - ' + SIDEBAR_WIDTH + 'px)'
      : '100%'} !important;
  transition: all ${props => (props.open ? 150 : 200)}ms ease-out !important;
`
