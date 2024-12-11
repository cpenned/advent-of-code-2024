const file = Bun.file("02/input.txt");
const rawData = await file.text();

const data = rawData
  .split("\n")
  .map((row) => row.split(" ").map((i) => parseInt(i)));

const numOfSafeReports1 = data.reduce((total, row) => {
  if (row[0] === row[1]) {
    return total;
  }
  const dir = row[0] - row[1] < 0 ? "inc" : "dec";

  const passChecks = row.every((num, idx, arr) => {
    if (idx === 0) return true;
    if (dir === "inc" && num - arr[idx - 1] <= 0) return false;
    if (dir === "dec" && arr[idx - 1] - num <= 0) return false;
    return Math.abs(num - arr[idx - 1]) > 3 ? false : true;
  });

  return passChecks ? total + 1 : total;
}, 0);

const numOfSafeReports2 = undefined;

console.log({
  part1: numOfSafeReports1,
  part2: numOfSafeReports2,
});
