function findKthNumber (k, list) {
  if ( k > list.length ) { return -1; }

  let p = partition(list, 0, list.length - 1);
  
  while (p + 1 !== k) {
    if (k < p + 1) {
      p = partition(list, 0, p - 1);
    } else {
      p = partition(list, p + 1, list.length - 1);
    }
  }

  return list[p];
}

function partition (list, start, end) {
  const pivot = list[end];
  let i = start;

  for (let j = start; j < end; j++) {
    if (list[j] <= pivot) {
      const temp = list[i];
      list[i] = list[j];
      list[j] = temp;
      i++;
    }
  }

  list[end] = list[i];
  list[i] = pivot;

  return i;
}

// 测试
const arrayList = [6, 5, 4, 1, 2, 6, 7, 8, 9];
console.log(findKthNumber(7, arrayList));