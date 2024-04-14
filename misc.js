// async function addTwoPromises(promise1, promise2) {
// 	const a = await Promise.allSettled([promise1, promise2]);
// 	console.log(a)
// 	return a.reduce((a, e) => a + e.value, 0)
// };

// addTwoPromises(Promise.resolve(2), Promise.resolve(2))
//   .then(console.log); // 4

// console.log(JSON.stringify([]))
// function Proto(params) {

// }
// Proto.prototype.toSt = function (params) {
// 	console.log(this)
// }

// function name(params) {
// 	console.log(this)
// }

// name.prototype = Object.create(Proto.prototype)
// name.prototype.constructor = name
// console.dir({Proto})

// console.dir({name})
// const a = {
// 	a: 42,
// 	say: function() {
// 		setTimeout(function() {
// 			console.log(this)
// 		}, 0);
// 	}
// }
// a.say()
