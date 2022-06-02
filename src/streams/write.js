import { createWriteStream } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { stdin } from "process";

const settings = {
  folder: "files",
  file: "fileToWrite.txt",
};

export const write = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));
  const _filename = resolve(_dirname, settings.folder, settings.file);
  const writer = createWriteStream(_filename, { encoding: "utf-8" });
  stdin.pipe(writer);
};

write().then();
