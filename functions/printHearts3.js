export function printHearts3(count) {
  console.log(`출력 :`);
  const heart = "♡";
  const countHearts = Math.abs(count);
  if (count >= 0) {
    let str = "";
    for (let i = 0; i < countHearts; i++) {
      console.log(heart.repeat(i));
    }
  }
  if (count < 0) {
    for (let i = countHearts; i > 0; i--) {
      console.log(heart.repeat(i));
    }
  }
}
