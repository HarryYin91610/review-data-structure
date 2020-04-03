function quickSort (list, start, end) {
  if (start >= end) { return; }

  const p = partition(list, start, end);

  quickSort(list, start, p - 1 < start ? start : p - 1);
  quickSort(list, p + 1 > end ? end : p + 1, end);

  return list;
}

function partition (arr, start, end) {
  const pivot = arr[end];
  let i = start;

  for (j = start; j < end; j++) {
    if (arr[j] <= pivot) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
    }
  }

  arr[end] = arr[i];
  arr[i] = pivot;

  return i;
}

// 测试
const arrayList = [6, 5, 4, 1, 2, 6, 7, 8, 9];
console.log(quickSort(arrayList, 0, arrayList.length - 1));