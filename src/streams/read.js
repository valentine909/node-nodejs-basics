import { createReadStream } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { stdout } from "process";

const settings = {
  folder: "files",
  file: "fileToRead.txt",
};

export const read = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));
  const _filename = resolve(_dirname, settings.folder, settings.file);
  const stream = createReadStream(_filename);
  stream.pipe(stdout);
  stream.on("readable", () => stream.read());
};

read().then();
