//

const findMaxAbs = arr => {
	let max = 0

	for (let i = 0; i < arr.length; i++) {
		for (let k = 0; k < arr.length; k++) {
			const val = Math.abs(arr[i] - arr[k])
			if (val > max) max = val
		}
	}
	return max
}

// console.log(findMaxAbs([-10, 9])) //19
// console.log(findMaxAbs([-10, 5, 9, 4, 3, 2, 1, 6, 8])) 19

const sum = a => {
	let summary = a
	const inner = b => {
		if (!b) return summary
		summary += b
		return inner
	}
	return inner
}

console.log(sum(2)()) // 2
console.log(sum(2)(3)()) // 5
