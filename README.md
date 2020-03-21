
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

yarn build-prd
yarn build-dev

# to publish
npm login
npm publish --access public
```

 