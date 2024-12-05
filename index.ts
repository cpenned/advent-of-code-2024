const list1 = [3, 4, 2, 1, 3, 3];
const list2 = [4, 3, 5, 3, 9, 3];

const totalDistance = (arr1: number[], arr2: number[]) => {
  const sortedList2 = arr2.toSorted();
  return arr1
    .toSorted()
    .reduce((acc, num, idx) => acc + sortedList2[idx] - num, 0);
};

console.log(totalDistance(list1, list2));
