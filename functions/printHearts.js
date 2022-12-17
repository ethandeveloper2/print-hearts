export function printHearts(count) {
  console.log(`출력 :`);
  const heart = "♡";
  // 입력 받은 숫자가 0 이상
  if (count >= 0) {
    for (let i = 0; i < Math.abs(count); i++) {
      for (let j = i; j >= 0; j--) {
        process.stdout.write(heart);
      }
      console.log();
    }
  }
  // 입력 받은 숫자가 0 미만
  if (count < 0) {
    for (let i = 0; i < Math.abs(count); i++) {
      for (let j = i; j < Math.abs(count); j++) {
        process.stdout.write(heart);
      }
      console.log();
    }
  }
}
