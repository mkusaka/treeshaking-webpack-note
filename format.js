const readline = require("readline");
process.stdin.resume();

const rl = readline.createInterface({
  input: process.stdin,
});

(async function () {
  const table = [["packageName", "importType", "size", "compressionType"]];
  for await (const line of rl) {
    if (!line.match(/ PASS /)) continue;
    const package = line.match(/packages\/(.*?)\//)[1];
    const packageName = package.replace("-note", "");
    const importType = line.match(new RegExp(`/${package}\/(.*?)\/dist/`))[1];
    const size = line.match(/: ([\d\.]+KB) /)[1];
    const compressionType = line.match(/\((.*)\)/)[1];
    console.log("packageName:    ", packageName);
    console.log("importType:     ", importType);
    console.log("size:           ", size);
    console.log("compressionType:", compressionType, "\n");
    table.push([packageName, importType, size, compressionType]);
  }
  const mdTable = table
    .map((e, idx) => {
      return (() => {
        const mainLine = `|\t${e.join("\t|\t")}\t|`;
        if (idx === 0) {
          return `${mainLine}\n|\t${Array(e.length)
            .fill("---")
            .join("\t|\t")}\t|`;
        }
        return mainLine;
      })();
    })
    .join("\n");

  console.log(`md table:\n${mdTable}`);
})();
