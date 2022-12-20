import { inputGuide, printHearts } from "./functions/printHearts.js";
import readline from "readline";
// import * as fs from "fs";
// import { Readable, createWriteStream, createReadStream, write } from "fs";

// 스트림은 순차적인 데이터이다.
// 뭔가 전달되어도 그게 끝이 아닐 수 있다.
// 그래서 계속 write 메서드를 호출 할 수 있다.
// process.stdout 는 Writable 스트림
// process.stdout.write("Hello, world!\\n");
// process.stdout.write("Hello, world! 2\\n");

// createWriteStream 함수는 파일을 작성할 수 있는 Writable 스트림을 만들어 반환한다.
// const stream = createWriteStream("output.txt");
// stream.write("hey");
// stream.write("stack");

// process.stdout.write("Hello, world!\\n");
// end 호출을 통해 스트림이 끝나면 더이상 write를 수행할 수 없다.
// process.stdout.end();
// process.stdout.write("ho");

// const stream = createReadStream("./input.txt");
// on을 이용해서 이벤트 핸들러를 등록 시킨다.
// 이벤트의 이름은 data, chunk를 인수로 받아서 그대로 출력한다.
// stream.on("data", (chunk) => {
//   console.log(`chunk: ${chunk}`);
// });

// 스트림이란?
// 순차적인 데이터
// 스트림을 사용하는 이유?
// 데이터를 순차적으로 처리할 수 있기 때문에, 끝이 없거나, 아주 거대한 데이터를 다루기 좋다.
// 스트림에는 크게 읽기 전용 스트림(Readable), 쓰기 전용 스트림(Writable)이 있다.
// 파일에 내용을 쓰는 스트림을 만드려면? createWriteStream 함수 사용
// 스트림을 이용해서 파일을 읽으려면? createReadStream 함수 사용
// Writable에는 write, end 등의 메서드가 있다.
// Readable에는 on을 이용해서, 이벤트 핸들러를 등록해서 데이터를 처리한다.
// const { Readable } = require("stream");

// oneToNine 클래스를 Readable 클래스를 확장하여 정의한다.
// class OneToNine extends Readable {
//   i = 1;
//Readable 객체로부터 재정의할 수 있는 메서드중 _read 메서드를 재정의한다.
// _read(size) {
//   if (this.i === 20) {
//     // 데이터를 멈춘다.
//     this.push(null);
//     return;
//   }
// push 메서드는 스트림을 읽으려고 하는 nodejs에 데이터를 넘기는 역할을 한다.
//     this.push(this.i.toString());
//     this.i += 1;
//   }
// }

// oneToNine 객체에 pipe 메서드를 호출해서 process.stdout이라는 writable과 연결한다.
// pipe로 Readable 객체와 Writable 객체를 연결하는 순간 REadable에서 읽을 수 있는 것은 계속 읽고
// 읽은 내용들은 Writable에 자동으로 write해준다.
// const oneToNine = new OneToNine();
// oneToNine.pipe(process.stdout);

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
