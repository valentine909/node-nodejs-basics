import fs from "fs/promises";
import { fsError, exists } from "./helper.js";
import path from "path";

const settings = {
  folder: "files",
  filename: "fileToRemove.txt",
};

export const remove = async () => {
  const __dirname = path.resolve();
  const file = path.resolve(__dirname, settings.folder, settings.filename);
  if (!(await exists(file))) {
    throw fsError;
  } else {
    await fs.rm(file);
  }
};

remove().then();
