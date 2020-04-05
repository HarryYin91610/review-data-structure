function countingSort (list) {
  if (list.length <= 1) { return list; }

  const counts = new Array(getMaxValue(list) + 1)
  const total = list.length;

  for (let i = 0; i < total; i++) {
    const val = list[i];
    if (!counts[val]) { counts[val] = 0; }
    counts[val]++;
  }
  
  for (let j = 1; j < counts.length; j++) {
    if (!counts[j - 1]) { counts[j - 1] = 0; }
    if (!counts[j]) { counts[j] = 0; }
    counts[j] += counts[j - 1];
  }

  const resList = [];
  for (let k = total - 1; k >= 0; k--) {
    const val = list[k];
    resList[counts[val] - 1] = val;
    counts[val]--;
  }

  return resList;
}

function getMaxValue (list) {
  let maxV = list[0];

  for (let i = 1; i < list.length; i++) {
    if (list[i] > maxV) {
      maxV = list[i];
    }
  }

  return maxV;
}

// 测试
list = [2, 3, 12, 6, 1, 0, 9, 4];
console.log(countingSort(list));