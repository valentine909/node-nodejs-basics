import * as crypto from "crypto";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const settings = {
  folder: "files",
  file: "fileToCalculateHashFor.txt",
};

export const calculateHash = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));
  const _filename = resolve(_dirname, settings.folder, settings.file);
  const data = await readFile(_filename);
  return crypto.createHash("sha256").update(data).digest("hex");
};

console.log(await calculateHash());
