import { createGzip } from "zlib";
import { createReadStream, createWriteStream } from "fs";
import { promisify } from "util";
import { pipeline } from "stream";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const settings = {
  folder: "files",
  file: "fileToCompress.txt",
  archive: "archive.gz",
};

export const compress = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));
  const _filename = resolve(_dirname, settings.folder, settings.file);
  const _archive = resolve(_dirname, settings.folder, settings.archive);
  const source = createReadStream(_filename);
  const destination = createWriteStream(_archive);
  const pipe = promisify(pipeline);
  const gzip = createGzip();
  await pipe(source, gzip, destination);
};

compress().then();
