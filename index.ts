const file = Bun.file("./input.txt");

const list1: number[] = [];
const list2: number[] = [];

const fileData = await file.text();

fileData.split("\n").forEach((row, ind) => {
  const [first, second] = row.split("   ");
  list1.push(parseInt(first.trim()));
  list2.push(parseInt(second.trim()));
});

const list2GroupedObject = list2.reduce(
  (acc: Record<number, number>, num) => ({
    ...acc,
    [num]: (acc[num] ?? 0) + 1,
  }),
  {}
);

const similarityScore = list1.reduce(
  (acc, num) => acc + num * (list2GroupedObject[num] ?? 0),
  0
);

console.log("🚀 ~ similarityScore:", similarityScore);
