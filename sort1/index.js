// 冒泡排序
function bubbleSort (list) {
  const n = list.length;
  let round = 0;
  if (n <= 1) { return list; }

  for (let i = 0; i < n; i++) {
    let exchange = false;
    round = i + 1;
    for (let j = 0; j < n - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        const temp = list[j + 1];
        list[j + 1] = list[j];
        list[j] = temp;
        exchange = true;
      }
    }
    if (!exchange) { break; }
  }
  
  console.log(`冒泡${round}次`);
  return list;
}

// 插入排序
function insertSort (list) {
  const n = list.length;
  if (n <= 1) { return list; }

  for (let i = 1; i < n; i++) {
    const item = list[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (item < list[j]) {
        list[j + 1] = list[j];
      } else {
        break;
      }
    }
    list[j + 1] = item;
  }

  return list;
}

// 选择排序
function selectSort (list) {
  const n = list.length;
  if (n <= 1) { return list; }

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j;
      }
    }
    const temp = list[i];
    list[i] = list[minIndex];
    list[minIndex] = temp;
  }

  return list;
}

// 测试冒泡
// console.log(bubbleSort([6, 5, 4, 1, 2, 6, 7, 8, 9]));

// 测试插入
// console.log(insertSort([6, 5, 4, 1, 2, 6, 7, 8, 9]));

// 测试选择
console.log(selectSort([6, 5, 4, 1, 2, 6, 7, 8, 9]));