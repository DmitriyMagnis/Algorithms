const bSearch = (arr, val) => {
  if (!arr?.length) return -1;
  let left = 0;
  let right = arr.length - 1;
  let idx = -1;

  while (left <= right) {
    const mid = Math.floor(left + right / 2);
    if (arr[mid] === val) {
      idx = mid;
      break;
    } else if (val < arr[mid]) {
      right = mid + 1;
    } else {
      left = mid - 1;
    }
  }

  return idx;
};

console.log(bSearch([1, 3, 5, 6, 7, 8, 9], 6));
console.log(bSearch([1, 3, 5, 6, 7, 8, 9], 3));
console.log(bSearch([1, 3, 5, 6, 7, 8, 9], 111));
console.log(bSearch([], 6));
