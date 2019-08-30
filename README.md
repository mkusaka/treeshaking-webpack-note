# treeshaking-webpack-note

# memo
## treeshaking-webpack-note/jquery/commnjs-import
```bash
% yarn run webpack --mode production
yarn run v1.15.2
$ treeshaking-webpack-note/jquery/commnjs-import/node_modules/.bin/webpack --mode production
Hash: eb50ded44d055d264a4b
Version: webpack 4.39.3
Time: 3105ms
Built at: 2019-08-31 01:01:21
    Asset     Size  Chunks                    Chunk Names
output.js  683 KiB       0  [emitted]  [big]  main
Entrypoint main [big] = output.js
[0] ./index.js 119 bytes {0} [built]
    + 1 hidden module

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  output.js (683 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (683 KiB)
      output.js


WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
```

## treeshaking-webpack-note/jquery/default-import
```bash
% yarn run webpack --mode production
yarn run v1.15.2
$ treeshaking-webpack-note/jquery/default-import/node_modules/.bin/webpack --mode production
Hash: 9d3b4e4a1cece187fad6
Version: webpack 4.39.3
Time: 3200ms
Built at: 2019-08-31 01:03:36
    Asset     Size  Chunks                    Chunk Names
output.js  683 KiB       0  [emitted]  [big]  main
Entrypoint main [big] = output.js
[1] ./index.js 114 bytes {0} [built]
    + 1 hidden module

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  output.js (683 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (683 KiB)
      output.js


WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
```

## treeshaking-webpack-note/jquery/namespace-import
```
% yarn run webpack --mode production
yarn run v1.15.2
$ treeshaking-webpack-note/jquery/namespace-import/node_modules/.bin/webpack --mode production
Hash: 6cfc294025fb69af8aed
Version: webpack 4.39.3
Time: 3102ms
Built at: 2019-08-31 01:05:29
    Asset     Size  Chunks                    Chunk Names
output.js  683 KiB       0  [emitted]  [big]  main
Entrypoint main [big] = output.js
[1] ./index.js 119 bytes {0} [built]
    + 1 hidden module

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets:
  output.js (683 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  main (683 KiB)
      output.js


WARNING in webpack performance recommendations:
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/
```
