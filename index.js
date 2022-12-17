const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("count를 입력해주세요.");

rl.on("line", (line) => {
  printHearts(line);
  rl.close();
});

rl.on("close", () => {
  process.exit();
});

const heart = "♡";

function printHearts(count) {
  console.log(`입력 : printHeart(${count})`);
  console.log(`출력 :`);
  if (count > 0) {
    for (let i = 0; i < Math.abs(count); i++) {
      for (let j = i; j >= 0; j--) {
        process.stdout.write(heart);
      }
      console.log();
    }
  }
  if (count < 0) {
    for (let i = 0; i < Math.abs(count); i++) {
      for (let j = i; j < Math.abs(count); j++) {
        process.stdout.write(heart);
      }
      console.log();
    }
  }
}
