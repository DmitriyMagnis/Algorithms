// var removeDuplicates = function (nums) {
//   let k = 1;

//   for (i = 0; i < nums.length - 1; i++) {
//     if (nums[i] !== nums[i + 1]) {
//       nums[k] = nums[i + 1];
//       k++;
//     }
//   }
//   console.log(nums, k);
//   return k;
// };
var removeDuplicates = function (nums) {
	let k = nums.length - 1

	while (k > 0) {
		if (nums[k] === nums[k - 1]) {
			nums.splice(k, 2)
		}
		k--
	}
	console.log(nums.length)
	return nums.length
}
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
// removeDuplicates([1, 1, 1, 1]);
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
// removeDuplicates([1, 1, 1, 1]);
