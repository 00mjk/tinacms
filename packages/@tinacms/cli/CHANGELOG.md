# tinacms-cli

## 1.3.2

### Patch Changes

- Updated dependencies [b095d06a9]
  - @tinacms/graphql@1.3.4
  - @tinacms/app@1.1.2
  - @tinacms/datalayer@1.1.5
  - @tinacms/metrics@1.0.2
  - @tinacms/schema-tools@1.3.3

## 1.3.1

### Patch Changes

- 591c6e95c: Wait for DB before checking schema.

## 1.3.0

### Minor Changes

- d9962edc2: rm previewSrc from images

### Patch Changes

- 2df7b56e4: feat: import invalid forestry field names
- Updated dependencies [0a5297800]
- Updated dependencies [9c277e179]
- Updated dependencies [7a3e86ba1]
- Updated dependencies [f831dcf4f]
- Updated dependencies [5427d03c6]
- Updated dependencies [353899de1]
- Updated dependencies [01b858e41]
  - @tinacms/graphql@1.3.3
  - @tinacms/schema-tools@1.3.3
  - @tinacms/app@1.1.2
  - @tinacms/datalayer@1.1.4
  - @tinacms/metrics@1.0.2

## 1.2.2

### Patch Changes

- c97ffc20d: Add schema checks to ensure the local and server schema are the same.
- Updated dependencies [aa0250979]
- Updated dependencies [892b4e39e]
- Updated dependencies [3b1fe23ef]
- Updated dependencies [c97ffc20d]
  - @tinacms/graphql@1.3.2
  - @tinacms/schema-tools@1.3.2
  - @tinacms/app@1.1.1
  - @tinacms/datalayer@1.1.3

## 1.2.1

### Patch Changes

- Updated dependencies [3bbb621cd]
  - @tinacms/graphql@1.3.1
  - @tinacms/datalayer@1.1.2

## 1.2.0

### Minor Changes

- 169147490: When markdown files fail to parse, fallback to the non-MDX parser

### Patch Changes

- Updated dependencies [a8457798a]
- Updated dependencies [94b8bb6e0]
- Updated dependencies [169147490]
- Updated dependencies [e15d82c2e]
- Updated dependencies [e732906b6]
  - @tinacms/graphql@1.3.0
  - @tinacms/app@1.1.0
  - @tinacms/schema-tools@1.3.1
  - @tinacms/datalayer@1.1.1

## 1.1.0

### Minor Changes

- efd56e769: Replace Store with AbstractLevel in Database. Update CLI to allow user to configure Database.

### Patch Changes

- efd56e769: Remove license headers
- Updated dependencies [efd56e769]
- Updated dependencies [efd56e769]
- Updated dependencies [50f86caed]
  - @tinacms/app@1.0.7
  - @tinacms/datalayer@1.1.0
  - @tinacms/graphql@1.2.0
  - @tinacms/metrics@1.0.2
  - @tinacms/schema-tools@1.3.0

## 1.0.9

### Patch Changes

- Updated dependencies [61f8c0e50]
  - @tinacms/app@1.0.6

## 1.0.8

### Patch Changes

- 55f7953eb: Small cli styling change on public assets in init
  - @tinacms/app@1.0.5

## 1.0.7

### Patch Changes

- 849dc0bb7: Adds more features to the forestry migration tool
- 23942cfcb: Add support for --rootPath argument in CLI commands
- e7c404bcf: Support remote path configuration for separate content repos

  Tina now supports serving content from a separate Git repo.

  ### Local development workflow

  To enable this during local development, point
  this config at the root of the content repo.

  > NOTE: Relative paths are fine to use here, but make sure it's relative to the `.tina/config` file

  ```ts
  localContentPath: process.env.REMOTE_ROOT_PATH // eg. '../../my-content-repo'
  ```

  ### Production workflow

  For production, your config should use the `clientId`, `branch`, and `token` values that are associated with your _content repo_.

- 82b22d6f7: fix: don't try and show spinners in CI logs
- d6301e7fb: Use the db status endpoint to validate credentials so that slow indexing does not cause builds to fail during indexing
- Updated dependencies [84fe97ca7]
- Updated dependencies [c5a603c75]
- Updated dependencies [23942cfcb]
- Updated dependencies [e7c404bcf]
- Updated dependencies [e8776aa59]
- Updated dependencies [e938b9d91]
- Updated dependencies [b7b05d03f]
- Updated dependencies [4533d5d66]
- Updated dependencies [31dacc176]
  - @tinacms/schema-tools@1.2.1
  - @tinacms/app@1.0.5
  - @tinacms/datalayer@1.0.1
  - @tinacms/graphql@1.1.0

## 1.0.6

### Patch Changes

- Updated dependencies [7d41435df]
- Updated dependencies [3165f397d]
- Updated dependencies [b2952a298]
  - @tinacms/graphql@1.0.5
  - @tinacms/schema-tools@1.2.0
  - @tinacms/app@1.0.4
  - @tinacms/datalayer@1.0.0
  - @tinacms/metrics@1.0.1

## 1.0.5

### Patch Changes

- 4ebc44068: Add a migration tool for forestry users
- Updated dependencies [7554ea362]
- Updated dependencies [1a75e8c13]
- Updated dependencies [4ebc44068]
  - @tinacms/schema-tools@1.1.0
  - @tinacms/app@1.0.4
  - @tinacms/metrics@1.0.1
  - @tinacms/graphql@1.0.4

## 1.0.4

### Patch Changes

- e0f71d4bd: Update the error message to include context from the server
- Updated dependencies [66ed1452b]
- Updated dependencies [7495f032b]
- Updated dependencies [de37c9eff]
  - @tinacms/app@1.0.3
  - @tinacms/schema-tools@1.0.3
  - @tinacms/graphql@1.0.3

## 1.0.3

### Patch Changes

- Updated dependencies [f13878798]
- Updated dependencies [c62d2bad4]
  - @tinacms/app@1.0.2

## 1.0.2

### Patch Changes

- c91bc0fc9: Tweak CLI styling for create-tina-app, tinacms dev, and tinacms init
- Updated dependencies [38438bad6]
- Updated dependencies [c91bc0fc9]
- Updated dependencies [78b9668b1]
- Updated dependencies [0b2164645]
- Updated dependencies [7c1425a82]
- Updated dependencies [c1ac4bf10]
- Updated dependencies [9d4943a82]
  - @tinacms/app@1.0.1
  - @tinacms/schema-tools@1.0.2
  - @tinacms/graphql@1.0.2

## 1.0.1

### Patch Changes

- Updated dependencies [08e02ec21]
- Updated dependencies [94a5da311]
  - @tinacms/schema-tools@1.0.1
  - @tinacms/graphql@1.0.1
  - @tinacms/app@1.0.0

## 1.0.0

### Major Changes

- 958d10c82: Tina 1.0 Release

  Make sure you have updated to th "iframe" path: https://tina.io/blog/upgrading-to-iframe/

### Patch Changes

- Updated dependencies [958d10c82]
  - @tinacms/app@1.0.0
  - @tinacms/datalayer@1.0.0
  - @tinacms/graphql@1.0.0
  - @tinacms/metrics@1.0.0
  - @tinacms/schema-tools@1.0.0

## 0.62.3

### Patch Changes

- Updated dependencies [f4dcf3e27]
- Updated dependencies [a5d6722c7]
- Updated dependencies [231dcab2e]
  - @tinacms/app@0.0.28
  - @tinacms/schema-tools@0.2.2
  - @tinacms/graphql@0.63.20

## 0.62.2

### Patch Changes

- 41a0e946c: Don't compile client since we have all info needed to create client.
- Updated dependencies [d58401231]
- Updated dependencies [3370cefd8]
- Updated dependencies [6c93834a2]
- Updated dependencies [e720590e1]
  - @tinacms/app@0.0.27
  - @tinacms/schema-tools@0.2.1
  - @tinacms/graphql@0.63.19

## 0.62.1

### Patch Changes

- a4de4fa6e: Fix typo in !

## 0.62.0

### Minor Changes

- 0fb26ac91: Updated to use new init for iframe way of editing.

### Patch Changes

- 2a03abe66: Remove console.log
- 4b1e773ae: Fix issue caused by removing client and types file
- Updated dependencies [fd7e4f636]
- Updated dependencies [f7d3cf532]
- Updated dependencies [774abcf9c]
- Updated dependencies [245a65dfe]
  - @tinacms/app@0.0.26
  - @tinacms/schema-tools@0.2.0
  - @tinacms/graphql@0.63.18

## 0.61.27

### Patch Changes

- Updated dependencies [6d06e18a3]
  - @tinacms/app@0.0.25

## 0.61.26

### Patch Changes

- 194123d26: Update error message
- 97f0b6472: Add raw editor support for static mode. Use `~` for preview path.
- 660dc62fb: Show a deperecated notification for old schema file usage
  - @tinacms/app@0.0.24
  - @tinacms/graphql@0.63.17

## 0.61.25

### Patch Changes

- ec73f1ea6: Check config.ts/config.tsx additionally for usingTs
- Updated dependencies [15f7c18ef]
- Updated dependencies [c4f9607ce]
  - @tinacms/app@0.0.24
  - @tinacms/schema-tools@0.1.9
  - @tinacms/graphql@0.63.16

## 0.61.24

### Patch Changes

- 009fe3180: Reorganize @tinacms/app so that it runs a local install in the working directory to ensure consistent dependencies
- 03aa3e09e: Remove the use of ESM package, which allowed CJS scripts to run as ES modules. This was initially used for yarn pnp support but is no longer necessary.
- Updated dependencies [009fe3180]
- Updated dependencies [2f6a3596d]
  - @tinacms/app@0.0.23
  - @tinacms/datalayer@0.2.4
  - @tinacms/graphql@0.63.15
  - @tinacms/metrics@0.0.3
  - @tinacms/schema-tools@0.1.8

## 0.61.23

### Patch Changes

- 2422e505d: Removed styled-components as a dependency in tinacms.
  Removed deprecated react-toolbar in @tinacms/toolkit.
- Updated dependencies [2422e505d]
  - @tinacms/app@0.0.22
  - @tinacms/graphql@0.63.15
  - @tinacms/datalayer@0.2.4
  - @tinacms/metrics@0.0.3
  - @tinacms/schema-tools@0.1.8

## 0.61.22

### Patch Changes

- Updated dependencies [005e1d699]
- Updated dependencies [ce6c1ccfb]
  - @tinacms/schema-tools@0.1.8
  - @tinacms/graphql@0.63.14
  - @tinacms/app@0.0.21

## 0.61.21

### Patch Changes

- 97225d5f0: Exit tinacms init when there's an error with dependency install
- fce51ddd8: Remove extra space in tina init console.log
- Updated dependencies [b1a357f60]
  - @tinacms/schema-tools@0.1.7
  - @tinacms/app@0.0.20
  - @tinacms/graphql@0.63.13

## 0.61.20

### Patch Changes

- Updated dependencies [c6e3bd321]
  - @tinacms/schema-tools@0.1.6
  - @tinacms/app@0.0.19
  - @tinacms/graphql@0.63.12

## 0.61.19

### Patch Changes

- 802381abd: Fix an issue where npm init didn't get awaited during init
  - @tinacms/app@0.0.18

## 0.61.18

### Patch Changes

- Updated dependencies [183249b11]
- Updated dependencies [8060d0949]
  - @tinacms/schema-tools@0.1.5
  - @tinacms/app@0.0.17
  - @tinacms/graphql@0.63.11

## 0.61.17

### Patch Changes

- @tinacms/app@0.0.16

## 0.61.16

### Patch Changes

- a4a829734: Remove styled-components from static install
  - @tinacms/app@0.0.15

## 0.61.15

### Patch Changes

- @tinacms/app@0.0.14

## 0.61.14

### Patch Changes

- f581f263d: Add --static option for `tina init`
- c06b6a2f0: fix: Don't run subprocess if main process fails with occupied port
- 47f99085d: Do not require a schema file when a config is provided.
- 64c40e6fc: change hardcoded content api url to be dynamic
- 2444cf047: - Makes cli checks the error message clearer
  - Adds a "Spinner" to the messages to make it cleaner
  - Does a GQL request to check the clientID, token, branch are all valid.
- f3439ea35: Replace loading message and hide forms while loading.
- 48032e2ba: Use tinaio url config override in the client
- 4efe31214: Include error message in file failed upload model
- Updated dependencies [f581f263d]
- Updated dependencies [e5da05a8c]
- Updated dependencies [0513ae416]
- Updated dependencies [7ae1b0697]
- Updated dependencies [f3439ea35]
- Updated dependencies [48032e2ba]
- Updated dependencies [6e137ea85]
  - @tinacms/schema-tools@0.1.4
  - @tinacms/app@0.0.13
  - @tinacms/datalayer@0.2.4
  - @tinacms/graphql@0.63.10

## 0.61.13

### Patch Changes

- 9183157c4: This allows us to use a leaner `define` function for the standalone config. Right now we're balancing a lot on the `defineSchema/defineConfig` types and have a few overlapping things like `client`, which accepts both an optional object with `referenceDepth` config as well as the autogenerated http client.

  One thing it does that's a bit different is it uses the `apiUrl` from the client generation function and sends it through as a global constant to the Vite app, this avoids the need for the generated `client`.

- 4adf12619: Add support for experimental iframe mode
- Updated dependencies [9183157c4]
- Updated dependencies [4adf12619]
- Updated dependencies [f8b89379c]
  - @tinacms/app@0.0.12
  - @tinacms/schema-tools@0.1.3
  - @tinacms/graphql@0.63.9

## 0.61.12

### Patch Changes

- Updated dependencies [87369d34c]
  - @tinacms/graphql@0.63.8

## 0.61.11

### Patch Changes

- Updated dependencies [777b1e08a]
  - @tinacms/schema-tools@0.1.2
  - @tinacms/graphql@0.63.7
  - @tinacms/app@0.0.11

## 0.61.10

### Patch Changes

- 75b9a1b56: enhancement: Don't build client on tinacms audit
- 10cce31b7: fix: surface errors from type-gen
- 9e5da3103: Add router to default schema
- 098102a89: fix: exit with error with tina schema build fails
- Updated dependencies [75b9a1b56]
- Updated dependencies [59ff1bb10]
- Updated dependencies [232ae6d52]
- Updated dependencies [fd4d8c8ff]
- Updated dependencies [9e5da3103]
  - @tinacms/graphql@0.63.6
  - @tinacms/schema-tools@0.1.1
  - @tinacms/app@0.0.10

## 0.61.9

### Patch Changes

- 2b60a7bd8: Improve audit so that it doesn't throw errors during the file list process. Also adds support for `--verbose` argument during `audit`.
- Updated dependencies [2b60a7bd8]
  - @tinacms/graphql@0.63.5
  - @tinacms/app@0.0.9

## 0.61.8

### Patch Changes

- b1f141e66: Fixes an issue where JSX inside the tina schema would break compilation for users using a later version of esbuild.
  - @tinacms/app@0.0.8

## 0.61.7

### Patch Changes

- Updated dependencies [1fc0e339e]
  - @tinacms/datalayer@0.2.3
  - @tinacms/graphql@0.63.4

## 0.61.6

### Patch Changes

- Updated dependencies [b369d7238]
  - @tinacms/graphql@0.63.3
  - @tinacms/app@0.0.7

## 0.61.5

### Patch Changes

- @tinacms/graphql@0.63.2

## 0.61.4

### Patch Changes

- @tinacms/app@0.0.6
- @tinacms/datalayer@0.2.2
- @tinacms/graphql@0.63.1
- @tinacms/metrics@0.0.3
- @tinacms/schema-tools@0.1.0

## 0.61.3

### Patch Changes

- Updated dependencies [067c49efd]
- Updated dependencies [9ba09bd0c]
  - @tinacms/graphql@0.63.1
  - @tinacms/app@0.0.5

## 0.61.2

### Patch Changes

- 8183b638c: ## Adds a new "Static" build option.

  This new option will build tina into a static `index.html` file. This will allow someone to use tina without having react as a dependency.

  ### How to update

  1.  Add a `.tina/config.{js,ts,tsx,jsx}` with the default export of define config.

  ```ts
  // .tina/config.ts
  import schema from './schema'

  export default defineConfig({
    schema: schema,
    //.. Everything from define config in `schema.ts`
    //.. Everything from `schema.config`
  })
  ```

  2. Add Build config

  ```
  .tina/config.ts

  export default defineConfig({
     build: {
       outputFolder: "admin",
       publicFolder: "public",
    },
    //... other config
  })
  ```

  3. Go to `http://localhost:3000/admin/index.html` and view the admin

- Updated dependencies [7b0dda55e]
- Updated dependencies [8183b638c]
  - @tinacms/graphql@0.63.0
  - @tinacms/schema-tools@0.1.0
  - @tinacms/app@0.0.4
  - @tinacms/datalayer@0.2.2
  - @tinacms/metrics@0.0.3

## 0.61.1

### Patch Changes

- 531347748: Update to use mkdirp to fix issue on windows
- Updated dependencies [028e10686]
- Updated dependencies [e27f5cce7]
  - @tinacms/graphql@0.62.1

## 0.61.0

### Minor Changes

- 870a32f18: This PR adds the new generated client, a new build command and introduces a new path of working with tina.

  # How to upgrade

  ## Updates to schema.ts

  Instead of passing an ApiURL, now the clientId, branch and read only token (NEW) will all be configured in the schema. The local url will be used if the --local flag is passed.

  This will require a change to the schema and the scripts.

  ```diff
  // .tina/schema.ts

  + import { client } from "./__generated__/client";

  // ...

  const schema = defineSchema({
  +    config: {
  +        branch: "main",
  +        clientId: "***",
  +        token: "***",
      },
      collections: [
          // ...
      ]
  })

  // ...
  - const branch = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF
  - const clientId = 'YOUR-CLIENT-ID-HERE'
  - const apiURL =
  -   process.env.NODE_ENV == 'development'
  -     ? 'http://localhost:4001/graphql'
  -    : `https://content.tinajs.io/content/${clientId}/github/${branch}`
  export const tinaConfig = defineConfig({
  +  client,
  -  apiURl,
    schema,
    // ...
  })

  export default schema
  ```

  The token must be a wildcard token (`*`) and can be generated from the tina dashboard. [Read more hear](https://tina.io/docs/graphql/read-only-tokens/)

  ## Updates to scripts in package.json

  We now recommend separating the graphQL server into two separate processes (two separate terminals in development). The scripts should look like this:

  ```json
  {
    "scripts": {
      "dev": "tinacms build --local && next dev",
      "dev-server": "tinacms server:start",
      "build": "tinacms build && next build"
      // ... Other Scripts
    }
  }
  ```

  When developing, in the first terminal run `yarn dev-server` and then `yarn dev` in the second.

  The old `-c` subcommand can still be used. This will start the dev server and next dev process in the same terminal.

  ```json
  {
    "scripts": {
      "dev": "tinacms server:start \"tinacms build --local && next dev\"",
      "dev-server": "tinacms server:start",
      "build": "tinacms build && next build"
      // ... Other Scripts
    }
  }
  ```

  ## Updates to generated files

  We now recommend ignoring most of the generated files. This is because `client.ts` and `types.ts` will be generated in CI with `tinacms build`

  To remove them from your repository, run `git rm --cached .tina/__generated__/*` and then `yarn tinacms build` to update the generated files that need to stay.

### Patch Changes

- 98f82cef7: Updates the init command to use the new client
- ae06f4a96: Fixed audit cmd to use datalayer
- 4360ef284: Minor bug fixes with tina init command in the CLI
- 3ac1fb8e4: Generate types and client based on the file type of the schema
- cf7df9859: Throw an error message when the client is not setup properly in production
- f68b045b9: Example page accounts for apps that use the src dir
- 637793dc0: Always reset the generated folder
- 8dab8d4ce: fix bug where tina init would error because there is no generated folder
- Updated dependencies [870a32f18]
- Updated dependencies [dcbc57c86]
- Updated dependencies [ae06f4a96]
- Updated dependencies [660247b6b]
- Updated dependencies [a7dcb8d44]
  - @tinacms/graphql@0.62.0
  - @tinacms/schema-tools@0.0.9
  - @tinacms/datalayer@0.2.2

## 0.60.28

### Patch Changes

- Updated dependencies [0b5a8e6e7]
  - @tinacms/graphql@0.61.3

## 0.60.27

### Patch Changes

- 8e893a027: Fixed issue where having a src and pages dir would cause an issue
- Updated dependencies [cf0f531a1]
- Updated dependencies [b0dfc6205]
  - @tinacms/datalayer@0.2.1
  - @tinacms/schema-tools@0.0.8
  - @tinacms/graphql@0.61.2

## 0.60.26

### Patch Changes

- b5b0dfd66: chore: migrate from fs.rmdir -> fs.rm
- 7d87eb6b7: Add `loadCustomStore` to top schema config
- 7038745f6: Fixed issue where server would start before the generated file was made.
- Updated dependencies [b5b0dfd66]
- Updated dependencies [7d87eb6b7]
- Updated dependencies [67e291e56]
- Updated dependencies [ae23e9ad6]
  - @tinacms/graphql@0.61.1
  - @tinacms/schema-tools@0.0.7

## 0.60.25

### Patch Changes

- 0bc18072e: Fixed issue where too many saves at one time would cause server to crash

## 0.60.24

### Patch Changes

- 2ef5a1f33: Use media config from the schema in the local media server
- 2ef5a1f33: Uses new `schema.config` when resolving media/asset urls
- b348f8b6b: Experimental isomorphic git bridge implementation
- b46e9a481: Fixed issue where child process would start before parent
- fb73fb355: Renames syncFolder to a mediaRoot when configuring Repo-Based Media
- 7b77fe1b5: Add a default TinaMediaStore for repo-based media
- 3e4b3ea7e: media manage uses relieve dir paths
- 99a13024d: Enables paging for local media manager
- Updated dependencies [2ef5a1f33]
- Updated dependencies [2ef5a1f33]
- Updated dependencies [b348f8b6b]
- Updated dependencies [fb73fb355]
- Updated dependencies [4daf15b36]
  - @tinacms/graphql@0.61.0
  - @tinacms/datalayer@0.2.0
  - @tinacms/schema-tools@0.0.6
  - @tinacms/metrics@0.0.3

## 0.60.23

### Patch Changes

- Updated dependencies [3325cd226]
  - @tinacms/graphql@0.60.8

## 0.60.22

### Patch Changes

- b1a4290e6: Use media config from the schema in the local media server
- 1955b8842: Uses new `schema.config` when resolving media/asset urls
- Updated dependencies [f6cb634c2]
- Updated dependencies [b1a4290e6]
- Updated dependencies [1955b8842]
- Updated dependencies [8b81c3cf3]
  - @tinacms/graphql@0.60.7
  - @tinacms/schema-tools@0.0.5
  - @tinacms/datalayer@0.1.1
  - @tinacms/metrics@0.0.3

## 0.60.21

### Patch Changes

- Updated dependencies [e2aafcd93]
- Updated dependencies [a20fed8b7]
  - @tinacms/graphql@0.60.6

## 0.60.20

### Patch Changes

- f71f55ac3: Fixd issue where --dev caused a breaking change
- Updated dependencies [57f09bdd7]
  - @tinacms/graphql@0.60.5

## 0.60.19

### Patch Changes

- d103b27ad: Fix issue where new collections would not be added when CLI restarts
- e06dbb3ca: Adds `waitForDB` cmd to cli
- Updated dependencies [d103b27ad]
  - @tinacms/graphql@0.60.4

## 0.60.18

### Patch Changes

- 79d112d79: Update cli to accept tinaCloudMediaStore flag and add to metadata during schema compilation
- 91d6e6758: revert platform aware paths in schema introduced in https://github.com/tinacms/tinacms/commit/558cc4368cd2a4b6e87dfb82bbfbb6f569f8a6f8
- b1240328d: Adds local server routes for handling media
- 91d6e6758: Fix issues with experimentalData on windows related to path separator inconsistency and interference with the .tina/**generated** folder
- Updated dependencies [79d112d79]
- Updated dependencies [3f46c6706]
- Updated dependencies [db9168578]
- Updated dependencies [91d6e6758]
  - @tinacms/graphql@0.60.3

## 0.60.17

### Patch Changes

- 08cdb672a: Adds `useRelativeMedia` support to local graphql client
- 646cad8da: Adds support for using the generated client on the frontend
- f857616f6: Rename sdk to queries
- Updated dependencies [08cdb672a]
- Updated dependencies [fdbfe9a16]
- Updated dependencies [6e2ed31a2]
  - @tinacms/graphql@0.60.2
  - @tinacms/schema-tools@0.0.4

## 0.60.16

### Patch Changes

- 7372f90ca: Adds a new client that can be used on the backend and frontend.
- Updated dependencies [3b11ff6ad]
  - @tinacms/graphql@0.60.1

## 0.60.15

### Patch Changes

- ceb826916: Fix issue where \_app override from tina init was improperly formatted

## 0.60.14

### Patch Changes

- Updated dependencies [6a6f137ae]
  - @tinacms/graphql@0.60.0

## 0.60.13

### Patch Changes

- 9d28ea29e: hide some existing start:server logging behind --verbose flag. format some messages to make them easier to read

## 0.60.12

### Patch Changes

- ef450a53a: - Update tinacms CLI to support schemaFileType option (default 'ts') to allow user to specify the schema file type
  - Update telemetry module to optionally check NO_TELEMETRY environment variable for disabling telemetry
- 81b729c24: Update formatting of cli init outputs
- 558cc4368: Make schema init platform-aware and refactor database put requests
- Updated dependencies [4da32454b]
- Updated dependencies [921709a7e]
- Updated dependencies [ef450a53a]
- Updated dependencies [a2906d6fe]
- Updated dependencies [558cc4368]
- Updated dependencies [06666d39f]
- Updated dependencies [3e2d9e43a]
  - @tinacms/graphql@0.59.11
  - @tinacms/schema-tools@0.0.3
  - @tinacms/metrics@0.0.3
  - @tinacms/datalayer@0.1.1

## 0.60.11

### Patch Changes

- Updated dependencies [cf33bcec1]
  - @tinacms/graphql@0.59.10

## 0.60.10

### Patch Changes

- 6154d12b8: Check for appropriate versions of react and react-dom before initializing with tinacms init
- 8c23d69a2: Adds an MDX example when you run @tinacms/cli init
- abf25c673: The schema can now to used on the frontend (optional for now but will be the main path moving forward).

  ### How to migrate.

  If you gone though the `tinacms init` process there should be a file called `.tina/components/TinaProvider`. In that file you can import the schema from `schema.ts` and add it to the TinaCMS wrapper component.

  ```tsx
  import TinaCMS from 'tinacms'
  import schema, { tinaConfig } from '../schema.ts'

  // Importing the TinaProvider directly into your page will cause Tina to be added to the production bundle.
  // Instead, import the tina/provider/index default export to have it dynamially imported in edit-moode
  /**
   *
   * @private Do not import this directly, please import the dynamic provider instead
   */
  const TinaProvider = ({ children }) => {
    return (
      <TinaCMS {...tinaConfig} schema={schema}>
        {children}
      </TinaCMS>
    )
  }

  export default TinaProvider
  ```

- Updated dependencies [8b3be903f]
- Updated dependencies [82174ff50]
- Updated dependencies [a87e1e6fa]
- Updated dependencies [abf25c673]
- Updated dependencies [591640db0]
- Updated dependencies [e8b0de1f7]
- Updated dependencies [b01f2e382]
  - @tinacms/datalayer@0.1.0
  - @tinacms/graphql@0.59.9

## 0.60.9

### Patch Changes

- 048538625: fix: return cms on cmsCallback codegen (to fix broken typing)
- Updated dependencies [e7b27ba3b]
- Updated dependencies [11d55f441]
  - @tinacms/graphql@0.59.8

## 0.60.8

### Patch Changes

- 919f5cb6c: use standard next script names

## 0.60.7

### Patch Changes

- 9e436f145: Update CLI to use defineConfig
- 851e4be73: Update tina init to use the new way of laying out tina config
- cc99e4309: update admin file path to /pages/admin.js to support the hash router
  - @tinacms/datalayer@0.0.2
  - @tinacms/graphql@0.59.7
  - @tinacms/metrics@0.0.2

## 0.60.6

### Patch Changes

- 98622111d: Use [esbuild](https://esbuild.github.io/) to build the schema instead of typescript.

  This allows the user to

  - use non typescript files like JS, JSX, TS
  - Import from outside of the tina folder

  The downside

  - Now type errors will still pass (The schema will compile) and one will get an error at runtime instead of compile time

- Updated dependencies [c730fa1dd]
- Updated dependencies [cd0f6f022]
  - @tinacms/graphql@0.59.7

## 0.60.5

### Patch Changes

- 399fbf4fa: Fix an issue where builds weren't happening during CI, this is only an issue for the experimental data layer

## 0.60.4

### Patch Changes

- a05546eb4: Added basic open source telemetry

  See [this discussion](https://github.com/tinacms/tinacms/discussions/2451) for more information and how to opt out.

- Updated dependencies [8bf0ac832]
- Updated dependencies [a05546eb4]
  - @tinacms/metrics@0.0.2
  - @tinacms/datalayer@0.0.2
  - @tinacms/graphql@0.59.6

## 0.60.3

### Patch Changes

- 43b40cc8b: Implement useTina in CLI init
- b399c734c: Fixes support for collection.templates in graphql
- Updated dependencies [b399c734c]
  - @tinacms/datalayer@0.0.2
  - @tinacms/graphql@0.59.6

## 0.60.2

### Patch Changes

- d17de356a: Update CLI to use apiUrl
- a67b0c1d7: Dont reinstantiate bridge and store

## 0.60.1

### Patch Changes

- Updated dependencies [8ad8f03fd]
- Updated dependencies [04b7988d5]
- Updated dependencies [e3c41f69d]
- Updated dependencies [f5390e841]
- Updated dependencies [32082e0b3]
  - @tinacms/graphql@0.59.5
  - @tinacms/datalayer@0.0.1

## 0.60.0

### Minor Changes

- 35884152b: Adds and audit command that checks files for errors.

### Patch Changes

- 083aa8ec6: Rebuild database every save while in local mode
- Updated dependencies [b66aefde1]
- Updated dependencies [35884152b]
- Updated dependencies [4948beec6]
  - @tinacms/graphql@0.59.4

## 0.59.0

### Minor Changes

- 70da62fe8: deprecated the use of `getStaticPropsForTina`

### Patch Changes

- 80732bd97: Create a @tinacms/datalayer package which houses the logic for data management for the GraphQL API. This simplifies the @tinacms/graphql package and allows for a clearer separation.
- Updated dependencies [34cd3a44a]
- Updated dependencies [b006a5ab9]
- Updated dependencies [a324b9c37]
- Updated dependencies [80732bd97]
- Updated dependencies [0bec208e2]
- Updated dependencies [5c070a83f]
  - @tinacms/graphql@0.59.3
  - @tinacms/datalayer@0.0.1

## 0.58.5

### Patch Changes

- Updated dependencies [212685fc3]
  - @tinacms/graphql@0.59.2

## 0.58.4

### Patch Changes

- 118524507: Fixed typo in admin link
- Updated dependencies [f46c6f987]
  - @tinacms/graphql@0.59.1

## 0.58.3

### Patch Changes

- Updated dependencies [bd4e1f802]
- Updated dependencies [62bea7019]
  - @tinacms/graphql@0.59.0

## 0.58.2

### Patch Changes

- Updated dependencies [fffce3af8]
  - @tinacms/graphql@0.58.2

## 0.58.1

### Patch Changes

- Updated dependencies [4700d7ae4]
  - @tinacms/graphql@0.58.1

## 0.58.0

### Minor Changes

- fa7a0419f: Adds experimental support for a data layer between file-based content and the GraphQL API. This allows documents to be indexed so the CMS can behave more like a traditional CMS, with the ability enforce foreign reference constraints and filtering/pagination capabilities.
- 8c14f29ef: Updated cli to include a new option, `--noSDK`. When this flag is present it will not generate the SDK.

### Patch Changes

- 9c5f888a3: Modifies `tinacms init` for `TinaAdmin`-ready page
- Updated dependencies [eb5fbfac7]
- Updated dependencies [fa7a0419f]
- Updated dependencies [47d126029]
  - @tinacms/graphql@0.58.0

## 0.57.2

### Patch Changes

- edb2f4011: Trim path property on collections during compilation
- Updated dependencies [edb2f4011]
  - @tinacms/graphql@0.57.2

## 0.57.1

### Patch Changes

- 50710e1d0: Add no-check for Typescript-generated file
- c78d981e6: Reset entire **generated** folder on re-compile
- Updated dependencies [60729f60c]
  - @tinacms/graphql@0.57.1

## 0.57.0

### Minor Changes

- d1ed404ba: Add support for auto-generated SDK for type-safe data fetching

### Patch Changes

- 138ceb8c4: Clean up dependencies
- Updated dependencies [138ceb8c4]
- Updated dependencies [577d6a5ad]
- Updated dependencies [ed277e3bd]
- Updated dependencies [d1ed404ba]
  - @tinacms/graphql@0.57.0

## 0.56.5

### Patch Changes

- 33ebe7a41: updated cli generated files
- Updated dependencies [4b7795612]
  - @tinacms/graphql@0.56.1

## 0.56.4

### Patch Changes

- b99baebf1: Add rich-text editor based on mdx, bump React dependency requirement to 16.14
- Updated dependencies [891623c7c]
- Updated dependencies [b99baebf1]
  - @tinacms/graphql@0.56.0

## 0.56.3

### Patch Changes

- 7c389cb0f: Remove Forestry reference in CLI hint

## 0.56.2

### Patch Changes

- Updated dependencies [9ecb392ca]
  - @tinacms/graphql@0.55.2

## 0.56.1

### Patch Changes

- Updated dependencies [ff4446c8e]
- Updated dependencies [667c33e2a]
  - @tinacms/graphql@0.55.1

## 0.56.0

### Minor Changes

- f3bddeb4a: Added new warning messages for list UI that we do not support by default
- 455a44359: Add noWatch option to server:start command. When this option is used, the config is not regenerated on file changes.

### Patch Changes

- Updated dependencies [2908f8176]
- Updated dependencies [5d83643b2]
- Updated dependencies [f3bddeb4a]
  - @tinacms/graphql@0.55.0

## 0.55.2

### Patch Changes

- e6e727697: feat: add simpler err message
- 9b27192fe: Build packages with new scripting, which includes preliminary support for ES modules.
- Updated dependencies [9b27192fe]
  - @tinacms/graphql@0.54.3

## 0.55.1

### Patch Changes

- d94fec611: Improve exported types for defineSchema
- Updated dependencies [d94fec611]
  - @tinacms/graphql@0.54.2

## 0.55.0

### Minor Changes

- f4f652dae: Updated regex for CSS in tina init CLI

## 0.54.2

### Patch Changes

- Updated dependencies [4de977f63]
  - @tinacms/graphql@0.54.1

## 0.54.1

### Patch Changes

- Updated dependencies [7663e0f7f]
  - @tinacms/graphql@0.54.0

## 0.54.0

### Minor Changes

- 069c63b73: Tina init command now adds exit-admin path

### Patch Changes

- Updated dependencies [b4f5e973f]
  - @tinacms/graphql@0.53.0

## 0.53.3

### Patch Changes

- Updated dependencies [b4bbdda86]
  - @tinacms/graphql@0.52.2

## 0.53.2

### Patch Changes

- Updated dependencies [b05c91c6]
  - @tinacms/graphql@0.52.1

## 0.53.1

### Patch Changes

- 7d2307321: Fixed the new line character in the @tinacms/cli init command
- Updated dependencies [aa4507697]
  - @tinacms/graphql@0.52.0

## 0.53.0

### Minor Changes

- 35d6f5e7: Added better error handleing for childProcess

## 0.52.2

### Patch Changes

- Updated dependencies [589c7806]
  - @tinacms/graphql@0.51.1

## 0.52.1

### Patch Changes

- c66b7eef: added regex to add css files to generated file
- Updated dependencies [5a934f6b]
- Updated dependencies [271a72d7]
  - @tinacms/graphql@0.51.0

## 0.52.0

### Minor Changes

- d6dd2886: Added styles to generated files from CLI

### Patch Changes

- 853330c1: Fix issue where NEXT_PUBLIC_EDIT_BRANCH was actually NEXT_PUBLIC_EDIT_BRACH in generated file

## 0.51.1

### Patch Changes

- Updated dependencies [0970961f]
  - @tinacms/graphql@0.50.2

## 0.51.0

### Minor Changes

- 25e0be67: update generated files in CLI

## 0.50.1

### Patch Changes

- Updated dependencies [65b3e3a3]
  - @tinacms/graphql@0.50.1

## 0.50.0

### Minor Changes

- 7f3c8c1a: # 🔧 Changes coming to TinaCMS ⚙️

  👋 You may have noticed we've been hard at-work lately building out a more opinionated approach to TinaCMS. To that end, we've settled around a few key points we'd like to announce. To see the work in progress, check out the [main](https://github.com/tinacms/tinacms/tree/main) branch, which will become the primary branch soon.

  ## Consolidating @tinacms packages in to @tinacms/toolkit

  By nature, Tina relies heavily on React context, and the dependency mismatches from over-modularizing our toolkit has led to many bugs related to missing context. To fix this, we'll be consolidating nearly every package in the @tinacms scope to a single package called `@tinacms/toolkit`

  We'll also be rolling out esm support as it's now much easier to address build improvements

  ## A more focused tinacms package

  The `tinacms` package now comes baked-in with APIs for working with the TinaCMS GraphQL API. Because `@tinacms/toolkit` now encompasses everything you'd need to build your own CMS integration, we're repurposing the `tinacms` package to more accurately reflect the "batteries-included" approach.

  If you haven't been introduced, the GraphQL API is a Git-backed CMS which we'll be leaning into more in the future. With a generous free tier and direct syncing with Github its something we're really excited to push forward. Sign up for free here
  Note: tinacms still exports the same APIs, but we'll gradually start moving the backend-agnostic tools to @tinacms/toolkit.

  ## Consolidating the tina-graphql-gateway repo

  The tina-graphql-gateway repo will be absorbed into this one. If you've been working with our GraphQL APIs you'll need to follow our migration guide.

  ## Moving from Lerna to Yarn PNP

  We've had success with Yarn 2 and PNP in other monorepos, if you're a contributor you'll notice some updates to the DX, which should hopefully result in a smoother experience.

  ## FAQ

  ### What about other backends?

  The `@tinacms/toolkit` isn't going anywhere. And if you're using packages like `react-tinacms-strapi` or r`eact-tinacms-github` with success, that won't change much, they'll just be powered by `@tinacms/toolkit` under the hood.

  ### Do I need to do anything?

  We'll be bumping all packages to `0.50.0` to reflect the changes. If you're using @tincams scoped packages those won't receive the upgrade. Unscoped packages like `react-tinacms-editor` will be upgraded, and should be bumped to 0.50.0 as well.
  When we move to `1.0.0` we'll be pushing internal APIs to `@tinacms/toolkit`, so that's the long-term location of

  ### Will you continue to patch older versions?

  We'll continue to make security patches, however major bug fixes will likely not see any updates. Keep in mind that `@tinacms/toolkit` will continue to be developed.

### Patch Changes

- Updated dependencies [7f3c8c1a]
  - @tinacms/graphql@0.1.0

## 0.4.0

### Minor Changes

- 7351d92f: # Define schema changes

  We're going to be leaning on a more _primitive_ concept of how types are defined with Tina, and in doing so will be introducing some breaking changes to the way schemas are defined. Read the detailed [RFC discussion](https://github.com/tinacms/rfcs/pull/18) for more on this topic, specifically the [latter portions](https://github.com/tinacms/rfcs/pull/18#issuecomment-805400313) of the discussion.

  ## Collections now accept a `fields` _or_ `templates` property

  You can now provide `fields` instead of `templates` for your collection, doing so will result in a more straightforward schema definition:

  ```js
  {
    collections: [
      {
        name: 'post',
        label: 'Post',
        path: 'content/posts',
        fields: [
          {
            name: 'title',
            label: 'Title',
            type: 'string', // read on below to learn more about _type_ changes
          },
        ],
        // defining `fields` and `templates` would result in a compilation error
      },
    ]
  }
  ```

  **Why?**

  Previously, a collection could define multiple templates, the ambiguity introduced with this feature meant that your documents needed a `_template` field on them so we'd know which one they belonged to. It also mean having to disambiguate your queries in graphql:

  ```graphql
  getPostDocument(relativePage: $relativePath) {
    data {
      ...on Article_Doc_Data {
        title
      }
    }
  }
  ```

  Going forward, if you use `fields` on a collection, you can omit the `_template` key and simplify your query:

  ```graphql
  getPostDocument(relativePage: $relativePath) {
    data {
      title
    }
  }
  ```

  ## `type` changes

  Types will look a little bit different, and are meant to reflect the lowest form of the shape they can represent. Moving forward, the `ui` field will represent the UI portion of what you might expect. For a blog post "description" field, you'd define it like this:

  ```js
  {
    type: "string",
    label: "Description",
    name: "description",
  }
  ```

  By default `string` will use the `text` field, but you can change that by specifying the `component`:

  ```js
  {
    type: "string",
    label: "Description",
    name: "description",
    ui: {
      component: "textarea"
    }
  }
  ```

  For the most part, the UI properties are added to the field and adhere to the existing capabilities of Tina's core [field plugins](https://tina.io/docs/fields/). But there's nothing stopping you from providing your own components -- just be sure to register those with the CMS object on the frontend:

  ```js
  {
    type: "string",
    label: "Description",
    name: "description",
    ui: {
      component: "myMapField"
      someAdditionalMapConfig: 'some-value'
    }
  }
  ```

  [Register](https://tina.io/docs/fields/custom-fields/#registering-the-plugin) your `myMapField` with Tina:

  ```js
  cms.fields.add({
    name: 'myMapField',
    Component: MapPicker,
  })
  ```

  ### One important gotcha

  Every property in the `defineSchema` API must be serlializable. Meaning functions will not work. For example, there's no way to define a `validate` or `parse` function at this level. However, you can either use the [formify](https://tina.io/docs/tina-cloud/client/#formify) API to get access to the Tina form, or provide your own logic by specifying a plugin of your choice:

  ```js
  {
    type: "string",
    label: "Description",
    name: "description",
    ui: {
      component: "myText"
    }
  }
  ```

  And then when you register the plugin, provide your custom logic here:

  ```js
  import { TextFieldPlugin } from 'tinacms'

  // ...

  cms.fields.add({
    ...TextFieldPlugin, // spread existing text plugin
    name: 'myText',
    validate: (value) => {
      someValidationLogic(value)
    },
  })
  ```

  **Why?**

  The reality is that under the hood this has made no difference to the backend, so we're removing it as a point of friction. Instead, `type` is the true definition of the field's _shape_, while `ui` can be used for customizing the look and behavior of the field's UI.

  ## Defensive coding in Tina

  When working with GraphQL, there are 2 reasons a property may not be present.

  1. The data is not a required property. That is to say, if I have a blog post document, and "category" is an optional field, we'll need to make sure we factor that into how we render our page:

  ```tsx
  const MyPage = (props) => {
    return (
      <>
        <h2>{props.getPostDocument.data.title}</h2>
        <MyCategoryComponent>
          {props.getPostDocument.data?.category}
        </MyCategoryComponent>
      </>
    )
  }
  ```

  2. The query did not ask for that field:

  ```graphql
  {
    getPostDocument {
      data {
        title
      }
    }
  }
  ```

  But with Tina, there's a 3rd scenario: the document may be in an invalid state. Meaning, we could mark the field as `required` _and_ query for the appropriate field, and _still_ not have the expected shape of data. Due to the contextual nature of Tina, it's very common to be in an intermediate state, where your data is incomplete simply because you're still working on it. Most APIs would throw an error when a document is in an invalid state. Or, more likely, you couldn't even request it.

  ## Undefined list fields will return `null`

  Previously an listable field which wasn't defined in the document was treated as an emptry array. So for example:

  ```md
  ---
  title: 'Hello, World'
  categories:
    - sports
    - movies
  ---
  ```

  The responsee would be `categories: ['sports', 'movies']`. If you omit the items, but kept the empty array:

  ```md
  ---
  title: 'Hello, World'
  categories: []
  ---
  ```

  The responsee would be `categories: []`. If you omit the field entirely:

  ```md
  ---
  title: 'Hello, World'
  ---
  ```

  The response will be `categories: null`. Previously this would have been `[]`, which was incorrect.

  ## For a listable item which is `required: true` you _must_ provide a `ui.defaultItem` property

  ### Why?

  It's possible for Tina's editing capabilities to introduce an invalid state during edits to list items. Imagine the scenario where you are iterating through an array of objects, and each object has a categories array on it we'd like to render:

  ```tsx
  const MyPage = (props) => {
    return props.blocks.map((block) => {
      return (
        <>
          <h2>{block.categories.split(',')}</h2>
        </>
      )
    })
  }
  ```

  For a new item, `categories` will be null, so we'll get an error. This only happens when you're editing your page with Tina, so it's not a production-facing issue.

  ## Every `type` can be a list

  Previously, we had a `list` field, which allowed you to supply a `field` property. Instead, _every_ primitive type can be represented as a list:

  ```js
  {
    type: "string",
    label: "Categories",
    name: "categories",
    list: true
  }
  ```

  Additionally, enumerable lists and selects are inferred from the `options` property. The following example is represented by a `select` field:

  ```js
  {
    type: "string",
    label: "Categories",
    name: "categories",
    options: ["fitness", "movies", "music"]
  }
  ```

  While this, is a `checkbox` field

  ```js
  {
    type: "string",
    label: "Categories",
    name: "categories"
    list: true,
    options: ["fitness", "movies", "music"]
  }
  ```

  > Note we may introduce an `enum` type, but haven't discussed it thoroughly

  ## Introducing the `object` type

  Tina currently represents the concept of an _object_ in two ways: a `group` (and `group-list`), which is a uniform collection of fields; and `blocks`, which is a polymporphic collection. Moving forward, we'll be introducing a more comporehensive type, which envelopes the behavior of both `group` and `blocks`, and since _every_ field can be a `list`, this also makes `group-list` redundant.

  > Note: we've previously assumed that `blocks` usage would _always_ be as an array. We'll be keeping that assumption with the `blocks` type for compatibility, but `object` will allow for non-array polymorphic objects.

  ### Defining an `object` type

  An `object` type takes either a `fields` _or_ `templates` property (just like the `collections` definition). If you supply `fields`, you'll end up with what is essentially a `group` item. And if you say `list: true`, you'll have what used to be a `group-list` definition.

  Likewise, if you supply a `templates` field and `list: true`, you'll get the same API as `blocks`. However you can also say `list: false` (or omit it entirely), and you'll have a polymorphic object which is _not_ an array.

  This is identical to the current `blocks` definition:

  ```js
  {
    type: "object",
    label: "Page Sections",
    name: "pageSections",
    list: true,
    templates: [{
      label: "Hero",
      name: "hero",
      fields: [{
        label: "Title",
        name: "title",
        type: "string"
      }]
    }]
  }
  ```

  And here is one for `group`:

  ```js
  {
    type: "object",
    label: "Hero",
    name: "hero",
    fields: [{
      label: "Title",
      name: "title",
      type: "string"
    }]
  }
  ```

  ## `dataJSON` field

  You can now request `dataJSON` for the entire data object as a single query key. This is great for more tedius queries like theme files where including each item in the result is cumbersome.

  > Note there is no typescript help for this feature for now

  ```graphql
  getThemeDocument(relativePath: $relativePath) {
    dataJSON
  }
  ```

  ```json
  {
    "getThemeDocument": {
      "dataJSON": {
        "every": "field",
        "in": {
          "the": "document"
        },
        "is": "returned"
      }
    }
  }
  ```

  ## Lists queries will now adhere to the GraphQL connection spec

  [Read the spec](https://relay.dev/graphql/connections.htm)

  Previously, lists would return a simple array of items:

  ```graphql
  {
    getPostsList {
      id
    }
  }
  ```

  Which would result in:

  ```json
  {
    "data": {
      "getPostsList": [
        {
          "id": "content/posts/voteForPedro.md"
        }
      ]
    }
  }
  ```

  In the new API, you'll need to step through `edges` & `nodes`:

  ```graphql
  {
    getPostsList {
      edges {
        node {
          id
        }
      }
    }
  }
  ```

  ```json
  {
    "data": {
      "getPostsList": {
        "edges": [
          {
            "node": {
              "id": "content/posts/voteForPedro.md"
            }
          }
        ]
      }
    }
  }
  ```

  **Why?**

  The GraphQL connection spec opens up a more future-proof structure, allowing us to put more information in to the _connection_ itself like how many results have been returned, and how to request the next page of data.

  Read [a detailed explanation](https://graphql.org/learn/pagination/) of how the connection spec provides a richer set of capabilities.

  > Note: sorting and filtering is still not supported for list queries.

  ## `_body` is no longer included by default

  There is instead an `isBody` boolean which can be added to any `string` field

  **Why?**

  Since markdown files sort of have an implicit "body" to them, we were automatically populating a field which represented the body of your markdown file. This wasn't that useful, and kind of annoying. Instead, just attach `isBody` to the field which you want to represent your markdown "body":

  ```js
  {
    collections: [{
      name: "post",
      label: "Post",
      path: "content/posts",
      fields: [
        {
          name: "title",
          label: "Title",
          type: "string"
        }
        {
          name: "myBody",
          label: "My Body",
          type: "string",
          component: 'textarea',
          isBody: true
        }
      ]
    }]
  }
  ```

  This would result in a form field called `My Body` getting saved to the body of your markdown file (if you're using markdown):

  ```md
  ---
  title: Hello, World!
  ---

  This is the body of the file, it's edited through the "My Body" field in your form.
  ```

  ## References now point to more than one collection.

  Instead of a `collection` property, you must now define a `collections` field, which is an array:

  ```js
  {
    type: "reference",
    label: "Author",
    name: "author",
    collections: ["author"]
  }
  ```

  ```graphql
  {
    getPostDocument(relativePath: "hello.md") {
      data {
        title
        author {
          ...on Author_Document {
            name
          }
          ...on Post_Document {
            title
          }
        }
      }
    }
  ```

  ## Other breaking changes

  ### The `template` field on polymorphic objects (formerly _blocks_) is now `_template`

  **Old API:**

  ```md
  ---
  ---

  myBlocks:

  - template: hero
    title: Hello

  ---
  ```

  **New API:**

  ```md
  ---
  ---

  myBlocks:

  - \_template: hero
    title: Hello

  ---
  ```

  ### `data` `__typename` values have changed

  They now include the proper namespace to prevent naming collisions and no longer require `_Doc_Data` suffix. All generated `__typename` properties are going to be slightly different. We weren't fully namespacing fields so it wasn't possible to guarantee that no collisions would occur. The pain felt here will likely be most seen when querying and filtering through blocks. This ensures the stability of this type in the future

  ```graphql
  {
    getPageDocument(relativePath: "home.md") {
      data {
        title
        myBlocks {
          ...on Page_Hero_Data {  # previously this would have been Hero_Data
            # ...
          }
        }
      }
    }
  ```

- 33e27538: Init command now adds admin.tsx file to the users pages folder
- 8c8fc2ad: Init script now checks for file extention.

### Patch Changes

- 5cd5ce76: - Improve types for ui field
  - Marks system fields as required so the user has a guarantee that they'll be there
  - Return null for listable fields which are null or undefined
  - Handle null values for reference fields better
- Updated dependencies [fdb7724b]
- Updated dependencies [d42e2bcf]
- Updated dependencies [5cd5ce76]
- Updated dependencies [8c425440]
- Updated dependencies [7351d92f]
  - tina-graphql@0.2.0
  - tina-graphql-helpers@0.1.2

## 0.3.1

### Patch Changes

- ebe77b21: added iframe to tina init generate page

## 0.3.0

### Minor Changes

- fa3967b3: tina-gql init command now updates the users package.json with tina-dev scripts and adds a \_app.js files into the users project

## 0.2.60

### Patch Changes

- c21bda17: Allow single command arguments to be passed in the sub command for the server:start command
- Updated dependencies [348ef1e5]
  - tina-graphql@0.1.25

## 0.2.58

### Patch Changes

- Updated dependencies [b36de960]
  - tina-graphql@0.1.24

## 0.2.57

### Patch Changes

- Bump packages to reflect new changest capabilities
- Updated dependencies [undefined]
  - tina-graphql@0.1.23
  - tina-graphql-helpers@0.1.1

## 0.2.56

### Patch Changes

- Updated dependencies [undefined]
  - tina-graphql-helpers@0.1.0
  - tina-graphql@0.1.22

## 0.2.55

### Patch Changes

- Updated dependencies [undefined]
  - tina-graphql@0.1.21
