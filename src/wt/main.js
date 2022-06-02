import { cpus } from "os";
import { Worker } from "worker_threads";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

const settings = {
  file: "worker.js",
};

export const performCalculations = async () => {
  const _dirname = dirname(fileURLToPath(import.meta.url));
  const _filename = resolve(_dirname, settings.file);
  const workers = [];
  for (let i = 0; i < cpus().length; i += 1) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(_filename, { workerData: { num: i + 10 } });
      worker.on("message", (number) => {
        resolve({ status: "resolved", data: number });
      });
      worker.on("error", () => reject({ status: "error" }));
    });
    workers.push(promise);
  }
  return Promise.all(workers);
};

console.log(await performCalculations().then());
