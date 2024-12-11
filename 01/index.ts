const file = Bun.file("01/input.txt");

const list1: number[] = [];
const list2: number[] = [];

const fileData = await file.text();

fileData.split("\n").forEach((row, ind) => {
  const [first, second] = row.split("   ");
  list1.push(parseInt(first.trim()));
  list2.push(parseInt(second.trim()));
});

const totalDistance = (arr1: number[], arr2: number[]) => {
  const sortedList2 = arr2.toSorted();
  return arr1.toSorted().reduce((acc, num, idx) => {
    return acc + Math.abs(sortedList2[idx] - num);
  }, 0);
};

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

console.log({
  "part 1": totalDistance(list1, list2),
  "part 2": similarityScore,
});
