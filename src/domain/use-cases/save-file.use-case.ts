import { existsSync, mkdirSync, writeFileSync } from "fs";

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
  fileContent: string;
  fileDestination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}

  execute({
    fileContent,
    fileDestination: destination = "outputs",
    fileName = "table",
  }: SaveFileOptions): boolean {
    try {
      if (!existsSync(destination)) mkdirSync(destination, { recursive: true });

      writeFileSync(`${destination}/${fileName}.txt`, fileContent);
      return true;
    } catch (error) {
      console.error({ error });
      return false;
    }
  }
}
