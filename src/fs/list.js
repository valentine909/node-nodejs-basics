import { readdir } from "fs/promises";
import { fsError, exists, _dirname } from "./helper.js";
import { resolve } from "path";

const settings = {
  folder: "files",
};

export const list = async () => {
  const folder = resolve(_dirname, settings.folder);
  if (await exists(folder)) {
    const files = await readdir(folder, { withFileTypes: true });
    files.map((file) => console.log(file.name));
  } else {
    throw fsError;
  }
};

list().then();
