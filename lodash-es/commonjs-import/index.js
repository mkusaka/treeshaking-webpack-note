const { uniq } = require("lodash-es");

uniq([
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 2, b: 2 }
]);
