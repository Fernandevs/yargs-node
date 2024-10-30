import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { argv } from "./config/plugins/yargs.adapter";

const dir = "outputs/";
const { b: base, l: limit, s: showTable } = argv;

let outputMessage = "";
const headerMessage = `================================================
\t\tTabla del ${base}
================================================
`;

for (let i = 1; i <= limit; i++)
  outputMessage += `${base} x ${i} = ${base * i}\n`;

outputMessage = headerMessage + outputMessage;

if (showTable) console.log(outputMessage);

if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

writeFileSync(`outputs/tabla-${base}.txt`, outputMessage);
console.log("File created");
