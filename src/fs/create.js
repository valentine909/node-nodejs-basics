import fs from "fs/promises";
import path from "path";
import { exists, fsError } from "./helper.js";

const settings = {
  folder: "files",
  file: "fresh.txt",
  message: "I am fresh and young",
};

export const create = async () => {
  const __dirname = path.resolve();
  const file = path.resolve(__dirname, settings.folder, settings.file);
  if (await exists(file)) {
    throw fsError;
  } else {
    await fs.writeFile(file, settings.message);
  }
};

create().then();
