// 查找第一个等于给定值的元素
function binaryFindFirst (list, value) {
  if (list.length < 1) { return -1; }

  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low

    if (list[mid] > value) {
      high = mid - 1;
    } else if (list[mid] < value) {
      low = mid + 1;
    } else {
      if (mid === 0 || list[mid - 1] !== value ) { return mid; }
      high = mid - 1;
    }
  }

  return -1;
}

// 查找最后一个等于给定值的元素
function binaryFindLast (list, value) {
  if (list.length < 1) { return -1; }

  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low

    if (list[mid] > value) {
      high = mid - 1;
    } else if (list[mid] < value) {
      low = mid + 1;
    } else {
      if (mid === list.length - 1 || list[mid + 1] !== value ) { return mid; }
      low = mid + 1;
    }
  }

  return -1;
}

// 查找第一个大于等于给定值的元素
function binaryFindFirstBig (list, value) {
  if (list.length < 1) { return -1; }

  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low

    if (list[mid] >= value) {
      if (mid === 0 || list[mid - 1] < value) { return mid; }
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
}

// 查找最后一个小于等于给定值的元素
function binaryFindLastSmall (list, value) {
  if (list.length < 1) { return -1; }

  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((high - low) / 2) + low

    if (list[mid] <= value) {
      if (mid === list.length - 1 || list[mid + 1] > value) { return mid; }
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

// 测试
const arr = [1, 2, 3, 4, 4, 4, 4, 4, 6, 7, 8, 8, 9]
const first = binaryFindFirst(arr, 4)
console.log(`FindFirst: ${first}`)

const last = binaryFindLast(arr, 4)
console.log(`FindLast: ${last}`)
const FisrtBig = binaryFindFirstBig(arr, 5)
console.log(`FindFisrtBig: ${FisrtBig}`)
const LastSmall = binaryFindLastSmall(arr, 4)
console.log(`FindLastSmall: ${LastSmall}`)