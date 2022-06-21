import { rm } from "fs/promises";
import { fsError, exists, _dirname } from "./helper.js";
import { resolve } from "path";

const settings = {
  folder: "files",
  filename: "fileToRemove.txt",
};

export const remove = async () => {
  const file = resolve(_dirname, settings.folder, settings.filename);
  if (!(await exists(file))) {
    throw fsError;
  } else {
    await rm(file);
  }
};

remove().then();
