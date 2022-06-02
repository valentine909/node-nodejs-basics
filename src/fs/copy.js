import fs from "fs/promises";
import path from "path";
import { fsError, exists } from "./helper.js";

const settings = {
  source: "files",
  destination: "files_copy",
};

export const copy = async () => {
  const __dirname = path.resolve();
  const src = path.resolve(__dirname, settings.source);
  const dest = path.resolve(__dirname, settings.destination);
  if ((await exists(dest)) || !(await exists(src))) {
    throw fsError;
  } else {
    await recursiveFilesCopy(src, dest);
  }
};

const recursiveFilesCopy = async (src, dest) => {
  await fs.mkdir(dest, { recursive: true });
  const files = await fs.readdir(src, { withFileTypes: true });
  for (const file of files) {
    const newSrc = path.resolve(src, file.name);
    const newDest = path.resolve(dest, file.name);
    if (file.isDirectory()) {
      await recursiveFilesCopy(newSrc, newDest);
    } else {
      await fs.copyFile(newSrc, newDest);
    }
  }
};

copy().then();
