
## Bootstrap


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
    @babel/loader \
    eslint \
    eslint-config-airbnb-base \
    eslint-config-prettier \
    eslint-plugin-import \
    eslint-plugin-prettier \
    prettier

# to build package
yarn add -D \
    webpack \
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
yarn test-browser
# visit localhost:5000/test/
# open console
```


