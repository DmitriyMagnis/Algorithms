//Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

//You must write an algorithm with O(log n) runtime complexity.

const searchInsert = function (arr, val) {
  if (!arr?.length) return 0;

  if (arr.length === 1) {
    return arr[0] >= val ? 0 : 1;
  }
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.ceil((left + right) / 2);

    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      left = mid;
    } else {
      right = mid - 1 < 0 ? 0 : mid - 1;
    }

    if (left === right) {
      return val > arr[right] ? right + 1 : right;
    }
  }
  // return 0
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
console.log(searchInsert([1], 0)); // 0
console.log(searchInsert([1, 3], 2)); // 1
console.log(searchInsert([3, 5, 7, 9, 10], 8)); // 3
console.log(searchInsert([1, 3, 5, 6], 7)); // 3
