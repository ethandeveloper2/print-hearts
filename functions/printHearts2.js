export function printHearts2(count) {
  console.log(`출력 :`);
  const heart = "♡";
  const countHearts = Math.abs(count);
  // 입력 받은 숫자가 0 이상
  if (count >= 0) {
    for (let i = 0; i < countHearts; i++) {
      for (let j = i; j >= 0; j--) {
        process.stdout.write(heart);
      }
      console.log();
    }
  }
  // 입력 받은 숫자가 0 미만
  if (count < 0) {
    for (let i = 0; i < countHearts; i++) {
      for (let j = i; j < countHearts; j++) {
        process.stdout.write(heart);
      }
      console.log();
    }
  }
}
