// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("GREET", () => {
//   console.log("Hello World");
// });

// emitter.emit("GREET");

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // 1. Downloading file in a bad way

  const file = fs.readFileSync("sample.txt");

  //   2. Using Stream
  const readableStream = fs.createReadStream("sample.txt");
  readableStream.pipe(res);
});

server.listen(8080, () => {
  console.log("Server is connected at 8080");
});
