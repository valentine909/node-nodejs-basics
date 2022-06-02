import fs from "fs/promises";
import path from "path";
import { fsError, exists } from "./helper.js";

const settings = {
  folder: "files",
  file: "fileToRead.txt",
};

export const read = async () => {
  const __dirname = path.resolve();
  const folder = path.resolve(__dirname, settings.folder);
  const file = path.resolve(folder, settings.file);
  if (await exists(file)) {
    const content = await fs.readFile(file, { encoding: "utf-8" });
    console.log(content);
  } else {
    throw fsError;
  }
};

read().then();
