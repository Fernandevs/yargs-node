// import { argv } from './args.adapter';

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { argv } = await import("./yargs.adapter");

  return argv;
};

describe("Test args.adapter.ts", () => {
  const originalArgv = process.argv;

  beforeEach(() => {
    process.argv = originalArgv;
    jest.resetModules();
  });

  test("should return default values", async () => {
    const argv = await runCommand([
      "-b",
      "8",
      "-l",
      "20",
      "-s",
      "true",
      "-n",
      "custom-name",
      "-d",
      "custom-output",
    ]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 8,
        l: 20,
        s: true,
        n: "custom-name",
        d: "custom-output",
      })
    );
  });

  test("should return configuration with custom values", async () => {
    const argv = await runCommand(["-b", "5"]);

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: "multiplication-table",
        d: "outputs",
      })
    );
  });
});
