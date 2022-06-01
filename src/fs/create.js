import fs from "fs/promises";
import path from "path";

export const create = async () => {
  const __dirname = path.resolve();
  const file = path.resolve(__dirname, "files", "fresh.txt");
  if (await isExists(file)) {
    throw new Error("FS operation failed");
  } else {
    await fs.writeFile(
      path.resolve(__dirname, "files", "fresh.txt"),
      "I am fresh and young"
    );
  }
};

export const isExists = async (path) => {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
};

create().then();
