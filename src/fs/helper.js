import fs from "fs/promises";

export const isExists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

export const fsError = new Error("FS operation failed");