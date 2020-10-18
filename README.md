# treeshaking-webpack-note

![build](https://github.com/mkusaka/treeshaking-webpack-note/workflows/build/badge.svg)

Webpack build size comparison for each import format, such as default import, named import, (re)named import, commonjs import.

# results

## webpack@5

check latest result: https://github.com/mkusaka/treeshaking-webpack-note/actions?query=workflow%3Abuild

| packageName | importType       | size     | compressionType |
| ----------- | ---------------- | -------- | --------------- |
| jquery      | commonjs-import  | 88.04KB  | no compression  |
| jquery      | default-import   | 88.3KB   | no compression  |
| jquery      | namespace-import | 88.29KB  | no compression  |
| lodash-es   | commonjs-import  | 87.92KB  | no compression  |
| lodash-es   | default-import   | 81.73KB  | no compression  |
| lodash-es   | named-import     | 4.94KB   | no compression  |
| lodash-es   | renamed-import   | 4.94KB   | no compression  |
| lodash-es   | scoped-import    | 4.94KB   | no compression  |
| moment      | commonjs-import  | 289.71KB | no compression  |
| moment      | default-import   | 289.9KB  | no compression  |
| moment      | named-import     | 289.89KB | no compression  |
| react       | commonjs-import  | 125.98KB | no compression  |
| react       | default-import   | 124.39KB | no compression  |
| react       | named-import     | 124.39KB | no compression  |
| react       | renamed-import   | 124.39KB | no compression  |
| jquery      | commonjs-import  | 30.4KB   | gzip            |
| jquery      | default-import   | 30.53KB  | gzip            |
| jquery      | namespace-import | 30.52KB  | gzip            |
| lodash-es   | commonjs-import  | 29.86KB  | gzip            |
| lodash-es   | default-import   | 27.44KB  | gzip            |
| lodash-es   | named-import     | 1.84KB   | gzip            |
| lodash-es   | renamed-import   | 1.84KB   | gzip            |
| lodash-es   | scoped-import    | 1.84KB   | gzip            |
| moment      | commonjs-import  | 71.86KB  | gzip            |
| moment      | default-import   | 71.96KB  | gzip            |
| moment      | named-import     | 71.95KB  | gzip            |
| react       | commonjs-import  | 39.67KB  | gzip            |
| react       | default-import   | 39.25KB  | gzip            |
| react       | named-import     | 39.25KB  | gzip            |
| react       | renamed-import   | 39.25KB  | gzip            |
| jquery      | commonjs-import  | 27.54KB  | brotli          |
| jquery      | default-import   | 27.63KB  | brotli          |
| jquery      | namespace-import | 27.65KB  | brotli          |
| lodash-es   | commonjs-import  | 26.06KB  | brotli          |
| lodash-es   | default-import   | 24.32KB  | brotli          |
| lodash-es   | named-import     | 1.73KB   | brotli          |
| lodash-es   | renamed-import   | 1.73KB   | brotli          |
| lodash-es   | scoped-import    | 1.73KB   | brotli          |
| moment      | commonjs-import  | 56.29KB  | brotli          |
| moment      | default-import   | 56.33KB  | brotli          |
| moment      | named-import     | 56.37KB  | brotli          |
| react       | commonjs-import  | 34.57KB  | brotli          |
| react       | default-import   | 34.27KB  | brotli          |
| react       | named-import     | 34.25KB  | brotli          |
| react       | renamed-import   | 34.27KB  | brotli          |

## webpack@4

| packageName | importType       | size     | compressionType |
| ----------- | ---------------- | -------- | --------------- |
| jquery      | commonjs-import  | 88.91KB  | no compression  |
| jquery      | default-import   | 88.94KB  | no compression  |
| jquery      | namespace-import | 88.93KB  | no compression  |
| lodash-es   | commonjs-import  | 99.37KB  | no compression  |
| lodash-es   | default-import   | 85.58KB  | no compression  |
| lodash-es   | named-import     | 6.22KB   | no compression  |
| lodash-es   | renamed-import   | 6.22KB   | no compression  |
| lodash-es   | scoped-import    | 6.22KB   | no compression  |
| moment      | commonjs-import  | 293.74KB | no compression  |
| moment      | default-import   | 293.77KB | no compression  |
| moment      | named-import     | 293.76KB | no compression  |
| react       | commonjs-import  | 127.54KB | no compression  |
| react       | default-import   | 127.57KB | no compression  |
| react       | named-import     | 127.56KB | no compression  |
| react       | renamed-import   | 127.56KB | no compression  |
| jquery      | commonjs-import  | 30.76KB  | gzip            |
| jquery      | default-import   | 30.77KB  | gzip            |
| jquery      | namespace-import | 30.77KB  | gzip            |
| lodash-es   | commonjs-import  | 30.62KB  | gzip            |
| lodash-es   | default-import   | 28.5KB   | gzip            |
| lodash-es   | named-import     | 2.28KB   | gzip            |
| lodash-es   | renamed-import   | 2.28KB   | gzip            |
| lodash-es   | scoped-import    | 2.28KB   | gzip            |
| moment      | commonjs-import  | 71.4KB   | gzip            |
| moment      | default-import   | 71.42KB  | gzip            |
| moment      | named-import     | 71.41KB  | gzip            |
| react       | commonjs-import  | 39.86KB  | gzip            |
| react       | default-import   | 39.87KB  | gzip            |
| react       | named-import     | 39.86KB  | gzip            |
| react       | renamed-import   | 39.86KB  | gzip            |
| jquery      | commonjs-import  | 189.6KB  | brotli          |
| jquery      | commonjs-import  | 27.83KB  | brotli          |
| jquery      | default-import   | 189.73KB | brotli          |
| jquery      | default-import   | 27.87KB  | brotli          |
| jquery      | namespace-import | 189.72KB | brotli          |
| jquery      | namespace-import | 27.83KB  | brotli          |
| lodash-es   | commonjs-import  | 27.01KB  | brotli          |
| lodash-es   | default-import   | 25.38KB  | brotli          |
| lodash-es   | named-import     | 2.13KB   | brotli          |
| lodash-es   | renamed-import   | 2.13KB   | brotli          |
| lodash-es   | scoped-import    | 2.13KB   | brotli          |
| moment      | commonjs-import  | 55.67KB  | brotli          |
| moment      | default-import   | 55.66KB  | brotli          |
| moment      | named-import     | 55.75KB  | brotli          |
| react       | commonjs-import  | 34.93KB  | brotli          |
| react       | default-import   | 34.91KB  | brotli          |
| react       | named-import     | 34.9KB   | brotli          |
| react       | renamed-import   | 35KB     | brotli          |
