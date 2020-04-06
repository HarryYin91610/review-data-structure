function binaryFind (list, value) {
  if (list.length < 1) { return -1; }

  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low;

    if (list[mid] === value) {
      return mid;
    } else if (list[mid] < value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// 测试
const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
console.log(binaryFind(arr, 44))
console.log(binaryFind(arr, 1))