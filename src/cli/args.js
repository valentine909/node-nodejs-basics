import { argv } from "process";

export const parseArgs = () => {
  const args = argv.slice(2);
  const grouped = [];
  for (let i = 0; i < args.length; i += 2) {
    grouped.push(`${args[i].slice(2)} is ${args[i + 1]}`);
  }
  console.log(grouped.join(", "));
};

parseArgs();
