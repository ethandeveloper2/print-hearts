import { printHearts } from "./functions/printHearts.js";
import { printHearts2 } from "./functions/printHearts2.js";
import { printHearts3 } from "./functions/printHearts3.js";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`하트의 갯수를 입력해주세요.`);
rl.on("line", (line) => {
  console.log(`입력: ${line}`);
  console.time("printHeart");
  printHearts(line);
  console.timeEnd("printHeart");

  console.time("printHeart2");
  printHearts2(line);
  console.timeEnd("printHeart2");

  console.time("printHeart3");
  printHearts3(line);
  console.timeEnd("printHeart3");
  rl.close();
});
