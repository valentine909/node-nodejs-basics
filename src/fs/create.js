import { writeFile } from "fs/promises";
import { resolve } from "path";
import { exists, fsError, _dirname } from "./helper.js";

const settings = {
  folder: "files",
  file: "fresh.txt",
  message: "I am fresh and young",
};

export const create = async () => {
  const file = resolve(_dirname, settings.folder, settings.file);
  if (await exists(file)) {
    throw fsError;
  } else {
    await writeFile(file, settings.message);
  }
};

create().then();
