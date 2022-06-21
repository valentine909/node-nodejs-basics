import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

const settings = {
  folder: "files",
  file: "fileToCompress.txt",
  archive: "archive.gz",
};

export const decompress = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));
  const _filename = resolve(_dirname, settings.folder, settings.file);
  const _archive = resolve(_dirname, settings.folder, settings.archive);
  const source = createReadStream(_archive);
  const destination = createWriteStream(_filename);
  source.pipe(createGunzip()).pipe(destination);
};

decompress().catch((err) => console.log(err));
