import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { CreateTable } from "../domain/use-cases/create-table.use-case";

interface RunOptions {
  base: number;
  limit: number;
  showTable: boolean;
  fileDestination: string;
  fileName: string;
}

export class Server {
  static run({ base, limit, showTable, fileName, fileDestination, }: RunOptions) {
    console.log("server running...");
    const table = new CreateTable().execute({ base, limit });
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileDestination,
      fileName,
    });

    if (showTable) console.log(table);

    wasCreated ? console.log("File created") : console.log("File not created");
  }
}
