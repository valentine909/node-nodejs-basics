import { stdin, stdout } from "process";
import { Transform } from "stream";

export const transformReverse = new Transform({
  transform(chunk, encording, callback) {
    callback(null, chunk.reverse() + '\n');
  },
});

stdin.pipe(transformReverse).pipe(stdout)
