# Bootstrap

## Install

```bash
# init
yarn init

# to setup vscode env
yarn add -D \
    @babel/cli \
    @babel/core \
    @babel/node \
    @babel/preset-env \
    @babel/runtime \
    eslint \
    eslint-config-airbnb-base \
    eslint-config-prettier \
    eslint-plugin-import \
    eslint-plugin-prettier \
    prettier

# to build package
yarn add -D \
    webpack \
    babel-loader \
    webpack-cli \
    webpack-merge

# package
yarn add lodash.reduce

# build
yarn build-prd
yarn build-dev

# to publish
npm login
npm publish --access public

# to unpulish
# only in 24h after publish
# cannot overwrite same name/version later
npm unpublish @oscar6echo/sample-umd-package -f
```

See [np](https://www.npmjs.com/package/np) i.e. a "npm publish" convenient package.

## Test

### Node

```bash
yarn test-node
```

### Browser

```bash
yarn test1-browser
yarn test1-browser-published # after publish
yarn test2-browser-dist
yarn test2-browser-lib
# visit localhost:5000/
# open console
```

## Debug

Use [VSCode debugger](https://code.visualstudio.com/docs/editor/debugging).  
Cf. config [launch.json](.vscode/launch.json)
