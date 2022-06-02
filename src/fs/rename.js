import { rename as fsRename } from "fs/promises";
import { resolve } from "path";
import { fsError, exists, _dirname } from "./helper.js";

const settings = {
  folder: "files",
  file: "wrongFilename.txt",
  newName: "properFilename.md",
};

export const rename = async () => {
  const file = resolve(_dirname, settings.folder, settings.file);
  const renamed = resolve(_dirname, settings.folder, settings.newName);
  if ((await exists(file)) && !(await exists(renamed))) {
    await fsRename(file, renamed);
  } else {
    throw fsError;
  }
};

rename().then();
