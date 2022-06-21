import { readFile } from "fs/promises";

export const JSONContent = async (filename) => {
  return JSON.parse(
    await readFile(new URL(filename, import.meta.url), { encoding: "utf-8" })
  );
};
