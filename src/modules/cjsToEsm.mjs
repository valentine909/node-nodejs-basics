import path from "path";
import {release, version} from "os"
import {createServer as createServerHttp} from "http"
import {JSONContent} from "./helper.js";
import * as c from "./files/c.js";
import {fileURLToPath} from "url";

const random = Math.random();

export let unknownObject;

if (random > 0.5) {
  unknownObject = JSONContent('./files/a.json');
} else {
  unknownObject = JSONContent('./files/b.json');
}

const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename);

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${_filename}`);
console.log(`Path to current directory is ${_dirname}`);

export const createMyServer = createServerHttp((_, res) => {
  res.end('Request accepted');
});
