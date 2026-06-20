const { Readble } = require("stream");

const readableStream = new Readble({
  read() {},
});

readableStream.on("data", (chunk) => {
  console.log("Chunk", chunk);
});

readableStream.push("Hello");
