const fs = require("fs/promises");
const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("TIMER");
    }, ms);
  });

const interval = (ms) =>
  new Promise((resolve, reject) => {
    setInterval(() => {
      resolve();
      console.log("TIMER");
    }, ms);
  });
const main = async () => {
  await interval(1000);
  await timeout(5000);
  const json = await fs.readFile("sample.json");
  console.log(json);
};
main();

console.log("END");
