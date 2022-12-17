export async function testCodeSpeed(codeName, code) {
  console.time(codeName);
  for (let i = 0; i < 100; i++) {
    code();
  }
  console.timeEnd(codeName);
}
