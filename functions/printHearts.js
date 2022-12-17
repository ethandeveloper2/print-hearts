export function printHearts(count) {
  console.log(`출력 :`);
  const heart = "♡";
  const countHearts = Math.abs(count);
  if (count >= 0) {
    for (let i = 0; i <= countHearts; i++) {
      console.log(heart.repeat(i));
    }
  }
  if (count < 0) {
    for (let i = countHearts; i >= 0; i--) {
      console.log(heart.repeat(i));
    }
  }
}

export function inputGuide() {
  console.log();
  console.log(`하트의 갯수를 입력해주세요.`);
  console.log(`종료를 원하시면 X를 입력해주세요.`);
}
