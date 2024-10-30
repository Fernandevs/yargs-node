import { SaveFile } from "./save-file.use-case";
import fs from "fs";

describe("SaveFileUseCase", () => {
  const customOptions = {
    fileContent: "custom content",
    fileDestination: "custom-outputs/file-destination",
    fileName: "custom-table-name",
  };
  
  const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`
  
  afterEach(() => {
    if (fs.existsSync("outputs")) fs.rmSync("outputs", { recursive: true });
    if (fs.existsSync("custom-outputs")) fs.rmSync("custom-outputs", { recursive: true });
  });

  test("should save file with default values", () => {
    const saveFile = new SaveFile();
    const filePath = "outputs/table.txt";
    const options = {
      fileContent: "test content",
    };

    const result = saveFile.execute(options);
    const fileExists = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    expect(result).toBeTruthy();
    expect(fileExists).toBeTruthy();
    expect(fileContent).toBe(options.fileContent);
  });

  test("should save file with default values", () => {
    const saveFile = new SaveFile();

    const result = saveFile.execute(customOptions);
    const fileExists = fs.existsSync(customFilePath);
    const fileContent = fs.readFileSync(customFilePath, { encoding: "utf-8" });

    expect(result).toBeTruthy();
    expect(fileExists).toBeTruthy();
    expect(fileContent).toBe(fileContent);
  });
});
