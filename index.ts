const file = Bun.file("./input.txt");

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

console.log(totalDistance(list1, list2));
