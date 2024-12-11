const file = Bun.file("03/input.txt");
const rawData = await file.text();

const matches = rawData.matchAll(/mul\(\d+,\d+\)/g);

const part1 = matches.reduce(
  (acc, match) =>
    acc +
    (match[0]
      .match(/\d+/g)
      ?.map(Number)
      .reduce((total, num) => num * total) ?? 0),
  0
);

console.log({
  part1: part1,
});
