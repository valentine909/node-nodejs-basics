import { access } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

export const exists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

export const fsError = new Error("FS operation failed");

export const _dirname = dirname(fileURLToPath(import.meta.url));
