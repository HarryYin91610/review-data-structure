// bucketSize：每个桶可存放值得范围大小
function bucketSort (list, bucketSize) {
  if (list.length <= 1) { return list; }

  const buckets = createBuckets(list, bucketSize);

  return sortBuckets(buckets);
}

function createBuckets (list, bucketSize) {
  let minV = list[0];
  let maxV = list[0];
  
  for (let i = 1; i < list.length; i++) {
    if (minV > list[i]) {
      minV = list[i];
    }
    if (maxV < list[i]) {
      maxV = list[i];
    }
  }

  const bucketNum = Math.floor((maxV - minV) / bucketSize) + 1;
  const buckets = [];

  for (let i = 0; i < bucketNum; i++) {
    buckets[i] = [];
  }

  for (let j = 0; j < list.length; j++) {
    const bIndex = Math.floor((list[j] - minV) / bucketSize);
    buckets[bIndex].push(list[j]);
  }

  return buckets;
}

function sortBuckets (buckets) {
  const resList = [];
  for (let i = 0; i < buckets.length; i++) {
    insertSort(buckets[i]);
    resList.push(...buckets[i]);
  }
  return resList;
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

// 测试
list = [2, 3, 12, 6, 1, 0, 9, 4];
console.log(bucketSort(list, 3));