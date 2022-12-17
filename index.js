import { inputGuide, printHearts } from "./functions/printHearts.js";
import readline from "readline";

const inputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inputGuide();
inputInterface.on("line", (count) => {
  // 입력값이 X가 아니며, 숫자일 때
  if (count != "x" && Number(count)) {
    console.log(`입력: ${count}`);
    printHearts(count);
    inputGuide();
  }
  // 입력값이 숫자가 아닐 때
  if (!Number(count)) {
    console.log("입력값을 올바르게 입력해주세요.");
  }
  // 입력값이 x일 때
  if (count == "x") {
    inputInterface.close();
  }
});
