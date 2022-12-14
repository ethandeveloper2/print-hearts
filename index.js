import { inputGuide, printHearts } from "./functions/printHearts.js";
import readline from "readline";

const inputInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

inputGuide();
inputInterface.on("line", (count) => {
  // 입력값이 'x'가 아니며, 숫자일 때
  if (count != "x" && Number(count)) {
    const result = printHearts(count);
    console.log(`입력: ${count}`);
    console.log(`출력 :`);
    console.log(result);
    inputGuide();
  }
  // 입력값이 숫자 또는 'x'가 아닐 때
  if (!Number(count) && count != "x") {
    console.log("입력값을 올바르게 입력해주세요.");
  }
  // 입력값이 'x'일 때
  if (count == "x") {
    inputInterface.close();
  }
});
