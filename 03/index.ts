const file = Bun.file("03/input.txt");
// const file = Bun.file("03/input.txt");
const rawData = await file.text();

const doMatches = Array.from(rawData.matchAll(/do\(\)/g));
const dontMatches = Array.from(rawData.matchAll(/don't\(\)/g));
const mulMatches = Array.from(rawData.matchAll(/mul\(\d+,\d+\)/g));

const getMultipliedMuls = (str: string): number =>
  str
    .match(/\d+/g)
    ?.map(Number)
    .reduce((total, num) => num * total) ?? 0;

const part1 = mulMatches.reduce(
  (acc, match) => acc + getMultipliedMuls(match[0]),
  0
);

const orderedMatches = [doMatches, dontMatches, mulMatches]
  .flatMap((m) => m)
  .sort((a, b) => a.index - b.index)
  .map((group) => ({
    type: group[0].substring(0, 3),
    value: group[0].startsWith("mul") ? getMultipliedMuls(group[0]) : null,
  }));

let lastType = "";
const part2 = orderedMatches.reduce((acc, group, idx) => {
  if (lastType === "don") {
    if (group.type === "do(") {
      lastType = group.type;
    }
    return acc;
  }
  if (group.value) {
    return acc + group.value;
  }
  lastType = group.type;
  return acc;
}, 0);

console.log({
  part1: part1,
  part2: part2,
});
