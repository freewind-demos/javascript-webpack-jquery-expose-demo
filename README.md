Webpack Expose jQuery to Global Demo
===================================

Some 3rd party requires the `jQuery` or `$` existed in global, and it's not easy with normal webpack.

We can use the `expose-loader` to do this job, please note the `require.resolve("jquery")` part in `webpack.config.js`.

```
npm install -g webpack
npm install
webpack
```

Then open `index.html` in your browser.

Documents
---------

1. https://www.npmjs.com/package/bootstrap-webpack