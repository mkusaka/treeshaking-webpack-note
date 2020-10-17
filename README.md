# treeshaking-webpack-note

![build](https://github.com/mkusaka/treeshaking-webpack-note/workflows/build/badge.svg)

Webpack build size comparison for each import format, such as default import, named import, (re)named import, commonjs import.

# results

## webpack@5

check latest result: https://github.com/mkusaka/treeshaking-webpack-note/actions?query=workflow%3Abuild

```bash
$ bundlesize --config bundlesize.json
 WARN  github token not found

    You are missing out on some cool features.
    Read more here: siddharthkp/bundlesize#2-build-status


 PASS  packages/jquery-note/commonjs-import/dist/output.js: 88.04KB (no compression)

 PASS  packages/jquery-note/default-import/dist/output.js: 88.3KB (no compression)

 PASS  packages/jquery-note/namespace-import/dist/output.js: 88.29KB (no compression)

 PASS  packages/lodash-es-note/commonjs-import/dist/output.js: 87.92KB (no compression)

 PASS  packages/lodash-es-note/default-import/dist/output.js: 81.73KB (no compression)

 PASS  packages/lodash-es-note/named-import/dist/output.js: 4.94KB (no compression)

 PASS  packages/lodash-es-note/renamed-import/dist/output.js: 4.94KB (no compression)

 PASS  packages/lodash-es-note/scoped-import/dist/output.js: 4.94KB (no compression)

 PASS  packages/moment-note/commonjs-import/dist/output.js: 289.71KB (no compression)

 PASS  packages/moment-note/default-import/dist/output.js: 289.9KB (no compression)

 PASS  packages/moment-note/named-import/dist/output.js: 289.89KB (no compression)

 PASS  packages/react-note/commonjs-import/dist/output.js: 125.98KB (no compression)

 PASS  packages/react-note/default-import/dist/output.js: 124.39KB (no compression)

 PASS  packages/react-note/named-import/dist/output.js: 124.39KB (no compression)

 PASS  packages/react-note/renamed-import/dist/output.js: 124.39KB (no compression)

 PASS  packages/jquery-note/commonjs-import/dist/output.js: 30.4KB (gzip)

 PASS  packages/jquery-note/default-import/dist/output.js: 30.53KB (gzip)

 PASS  packages/jquery-note/namespace-import/dist/output.js: 30.52KB (gzip)

 PASS  packages/lodash-es-note/commonjs-import/dist/output.js: 29.86KB (gzip)

 PASS  packages/lodash-es-note/default-import/dist/output.js: 27.44KB (gzip)

 PASS  packages/lodash-es-note/named-import/dist/output.js: 1.84KB (gzip)

 PASS  packages/lodash-es-note/renamed-import/dist/output.js: 1.84KB (gzip)

 PASS  packages/lodash-es-note/scoped-import/dist/output.js: 1.84KB (gzip)

 PASS  packages/moment-note/commonjs-import/dist/output.js: 71.86KB (gzip)

 PASS  packages/moment-note/default-import/dist/output.js: 71.96KB (gzip)

 PASS  packages/moment-note/named-import/dist/output.js: 71.95KB (gzip)

 PASS  packages/react-note/commonjs-import/dist/output.js: 39.67KB (gzip)

 PASS  packages/react-note/default-import/dist/output.js: 39.25KB (gzip)

 PASS  packages/react-note/named-import/dist/output.js: 39.25KB (gzip)

 PASS  packages/react-note/renamed-import/dist/output.js: 39.25KB (gzip)

 PASS  packages/jquery-note/commonjs-import/dist/output-pretty.js: 189.6KB (brotli)

 PASS  packages/jquery-note/commonjs-import/dist/output.js: 27.54KB (brotli)

 PASS  packages/jquery-note/default-import/dist/output-pretty.js: 189.73KB (brotli)

 PASS  packages/jquery-note/default-import/dist/output.js: 27.63KB (brotli)

 PASS  packages/jquery-note/namespace-import/dist/output-pretty.js: 189.72KB (brotli)

 PASS  packages/jquery-note/namespace-import/dist/output.js: 27.65KB (brotli)

 PASS  packages/lodash-es-note/commonjs-import/dist/output.js: 26.06KB (brotli)

 PASS  packages/lodash-es-note/default-import/dist/output.js: 24.32KB (brotli)

 PASS  packages/lodash-es-note/named-import/dist/output.js: 1.73KB (brotli)

 PASS  packages/lodash-es-note/renamed-import/dist/output.js: 1.73KB (brotli)

 PASS  packages/lodash-es-note/scoped-import/dist/output.js: 1.73KB (brotli)

 PASS  packages/moment-note/commonjs-import/dist/output.js: 56.29KB (brotli)

 PASS  packages/moment-note/default-import/dist/output.js: 56.33KB (brotli)

 PASS  packages/moment-note/named-import/dist/output.js: 56.37KB (brotli)

 PASS  packages/react-note/commonjs-import/dist/output.js: 34.57KB (brotli)

 PASS  packages/react-note/default-import/dist/output.js: 34.27KB (brotli)

 PASS  packages/react-note/named-import/dist/output.js: 34.25KB (brotli)

 PASS  packages/react-note/renamed-import/dist/output.js: 34.27KB (brotli)
```

## webpack@4

see: https://github.com/mkusaka/treeshaking-webpack-note/runs/1268815281?check_suite_focus=true

```
$ bundlesize --config bundlesize.json
 WARN  github token not found

    You are missing out on some cool features.
    Read more here: siddharthkp/bundlesize#2-build-status


 PASS  packages/jquery-note/commonjs-import/dist/output.js: 88.91KB (no compression)

 PASS  packages/jquery-note/default-import/dist/output.js: 88.94KB (no compression)

 PASS  packages/jquery-note/namespace-import/dist/output.js: 88.93KB (no compression)

 PASS  packages/lodash-es-note/commonjs-import/dist/output.js: 99.37KB (no compression)

 PASS  packages/lodash-es-note/default-import/dist/output.js: 85.58KB (no compression)

 PASS  packages/lodash-es-note/named-import/dist/output.js: 6.22KB (no compression)

 PASS  packages/lodash-es-note/renamed-import/dist/output.js: 6.22KB (no compression)

 PASS  packages/lodash-es-note/scoped-import/dist/output.js: 6.22KB (no compression)

 PASS  packages/moment-note/commonjs-import/dist/output.js: 293.74KB (no compression)

 PASS  packages/moment-note/default-import/dist/output.js: 293.77KB (no compression)

 PASS  packages/moment-note/named-import/dist/output.js: 293.76KB (no compression)

 PASS  packages/react-note/commonjs-import/dist/output.js: 127.54KB (no compression)

 PASS  packages/react-note/default-import/dist/output.js: 127.57KB (no compression)

 PASS  packages/react-note/named-import/dist/output.js: 127.56KB (no compression)

 PASS  packages/react-note/renamed-import/dist/output.js: 127.56KB (no compression)

 PASS  packages/jquery-note/commonjs-import/dist/output.js: 30.76KB (gzip)

 PASS  packages/jquery-note/default-import/dist/output.js: 30.77KB (gzip)

 PASS  packages/jquery-note/namespace-import/dist/output.js: 30.77KB (gzip)

 PASS  packages/lodash-es-note/commonjs-import/dist/output.js: 30.62KB (gzip)

 PASS  packages/lodash-es-note/default-import/dist/output.js: 28.5KB (gzip)

 PASS  packages/lodash-es-note/named-import/dist/output.js: 2.28KB (gzip)

 PASS  packages/lodash-es-note/renamed-import/dist/output.js: 2.28KB (gzip)

 PASS  packages/lodash-es-note/scoped-import/dist/output.js: 2.28KB (gzip)

 PASS  packages/moment-note/commonjs-import/dist/output.js: 71.4KB (gzip)

 PASS  packages/moment-note/default-import/dist/output.js: 71.42KB (gzip)

 PASS  packages/moment-note/named-import/dist/output.js: 71.41KB (gzip)

 PASS  packages/react-note/commonjs-import/dist/output.js: 39.86KB (gzip)

 PASS  packages/react-note/default-import/dist/output.js: 39.87KB (gzip)

 PASS  packages/react-note/named-import/dist/output.js: 39.86KB (gzip)

 PASS  packages/react-note/renamed-import/dist/output.js: 39.86KB (gzip)

 PASS  packages/jquery-note/commonjs-import/dist/output-pretty.js: 189.6KB (brotli)

 PASS  packages/jquery-note/commonjs-import/dist/output.js: 27.83KB (brotli)

 PASS  packages/jquery-note/default-import/dist/output-pretty.js: 189.73KB (brotli)

 PASS  packages/jquery-note/default-import/dist/output.js: 27.87KB (brotli)

 PASS  packages/jquery-note/namespace-import/dist/output-pretty.js: 189.72KB (brotli)

 PASS  packages/jquery-note/namespace-import/dist/output.js: 27.83KB (brotli)

 PASS  packages/lodash-es-note/commonjs-import/dist/output.js: 27.01KB (brotli)

 PASS  packages/lodash-es-note/default-import/dist/output.js: 25.38KB (brotli)

 PASS  packages/lodash-es-note/named-import/dist/output.js: 2.13KB (brotli)

 PASS  packages/lodash-es-note/renamed-import/dist/output.js: 2.13KB (brotli)

 PASS  packages/lodash-es-note/scoped-import/dist/output.js: 2.13KB (brotli)

 PASS  packages/moment-note/commonjs-import/dist/output.js: 55.67KB (brotli)

 PASS  packages/moment-note/default-import/dist/output.js: 55.66KB (brotli)

 PASS  packages/moment-note/named-import/dist/output.js: 55.75KB (brotli)

 PASS  packages/react-note/commonjs-import/dist/output.js: 34.93KB (brotli)

 PASS  packages/react-note/default-import/dist/output.js: 34.91KB (brotli)

 PASS  packages/react-note/named-import/dist/output.js: 34.9KB (brotli)

 PASS  packages/react-note/renamed-import/dist/output.js: 35KB (brotli)
```
