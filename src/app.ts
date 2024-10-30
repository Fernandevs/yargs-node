import { argv } from "./config/plugins/yargs.adapter";
import { Server } from "./presentation/server";

(async () => {
  await main();
})();

async function main() {
  const {
    b: base,
    l: limit,
    s: showTable,
    d: fileDestination,
    n: fileName,
  } = argv;

  Server.run({
    base,
    limit,
    showTable,
    fileName,
    fileDestination,
  });
}
