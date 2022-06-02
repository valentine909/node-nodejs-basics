import { spawn } from "child_process";
import { stdin, stdout } from "process";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const settings = {
  folder: "files",
  file: "script.js",
};

export const spawnChildProcess = async (args) => {
  const _dirname = dirname(fileURLToPath(import.meta.url));
  const _filename = resolve(_dirname, settings.folder, settings.file);
  const child = spawn("node", [_filename].concat(args));
  stdin.pipe(child.stdin);
  child.stdout.pipe(stdout);
};

spawnChildProcess(["--use-strict", "hello"]).then();
