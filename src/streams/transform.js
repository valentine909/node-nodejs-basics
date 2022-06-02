import { stdin, stdout } from "process";

export const transform = async () => {
  stdin.on("readable", () => {
    const chunk = stdin.read();
    if (chunk) {
      stdout.write(chunk.reverse());
    }
  });
};

transform().then();
