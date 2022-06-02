import { copyFile, mkdir, readdir } from "fs/promises";
import { resolve } from "path";
import { fsError, exists, _dirname } from "./helper.js";

const settings = {
  source: "files",
  destination: "files_copy",
};

export const copy = async () => {
  const src = resolve(_dirname, settings.source);
  const dest = resolve(_dirname, settings.destination);
  if ((await exists(dest)) || !(await exists(src))) {
    throw fsError;
  } else {
    await recursiveFilesCopy(src, dest);
  }
};

const recursiveFilesCopy = async (src, dest) => {
  await mkdir(dest, { recursive: true });
  const files = await readdir(src, { withFileTypes: true });
  for (const file of files) {
    const newSrc = resolve(src, file.name);
    const newDest = resolve(dest, file.name);
    if (file.isDirectory()) {
      await recursiveFilesCopy(newSrc, newDest);
    } else {
      await copyFile(newSrc, newDest);
    }
  }
};

copy().then();
