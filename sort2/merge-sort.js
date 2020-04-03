let count = 1;

function mergeSort (list) {
  if (list.length <= 1) {
    return list
  }

  const mid = Math.floor(list.length / 2)
  
  const left = list.slice(0, mid);
  const right = list.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge (left, right) {
  let i = 0;
  let j = 0;
  const tempList = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j] ) {
      tempList.push(left[i]);
      i++;
    } else {
      tempList.push(right[j]);
      j++;
    }
  }

  return tempList.concat(left.slice(i), right.slice(j));
}

// 测试
const arrayList = [6, 5, 4, 1, 2, 6, 7, 8, 9];
console.log(mergeSort(arrayList));
