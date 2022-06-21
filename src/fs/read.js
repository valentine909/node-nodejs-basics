import { readFile } from "fs/promises";
import { resolve } from "path";
import { fsError, exists, _dirname } from "./helper.js";

const settings = {
  folder: "files",
  file: "fileToRead.txt",
};

export const read = async () => {
  const folder = resolve(_dirname, settings.folder);
  const file = resolve(folder, settings.file);
  if (await exists(file)) {
    const content = await readFile(file, { encoding: "utf-8" });
    console.log(content);
  } else {
    throw fsError;
  }
};

read().then();
