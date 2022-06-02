import fs from "fs/promises";
import { fsError, exists } from "./helper.js";
import path from "path";

const settings = {
  folder: "files",
};

export const list = async () => {
  const __dirname = path.resolve();
  const folder = path.resolve(__dirname, settings.folder);
  if (await exists(folder)) {
    const files = await fs.readdir(folder, { withFileTypes: true });
    files.map((file) => console.log(file.name));
  } else {
    throw fsError;
  }
};

list().then();
