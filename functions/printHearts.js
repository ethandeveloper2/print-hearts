export function printHearts(count) {
  const heart = "♡";
  const countHearts = Math.abs(count);
  let result = "";
  if (count >= 0) {
    for (let i = 1; i <= countHearts; i++) {
      if (i == countHearts) {
        result = result + heart.repeat(i);
      } else {
        result = result + heart.repeat(i) + "\n";
      }
    }
  }
  if (count < 0) {
    for (let i = countHearts; i >= 1; i--) {
      if (i == 1) {
        result = result + heart.repeat(i);
      } else {
        result = result + heart.repeat(i) + "\n";
      }
    }
  }
  return result;
}

export function inputGuide() {
  console.log();
  console.log(`하트의 갯수를 입력해주세요.`);
  console.log(`종료를 원하시면 X를 입력해주세요.`);
}
