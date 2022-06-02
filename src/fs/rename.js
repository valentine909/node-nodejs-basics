import fs from "fs/promises";
import path from "path";
import { fsError, exists } from "./helper.js";

const settings = {
  folder: "files",
  file: "wrongFilename.txt",
  newName: "properFilename.md",
};

export const rename = async () => {
  const __dirname = path.resolve();
  const file = path.resolve(__dirname, settings.folder, settings.file);
  const renamed = path.resolve(__dirname, settings.folder, settings.newName);
  if ((await exists(file)) && !(await exists(renamed))) {
    await fs.rename(file, renamed);
  } else {
    throw fsError;
  }
};

rename().then();
