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
// const b = [1, 2, 3];
// const a = {
//   start: 1,
//   end: 6,
//   [Symbol.iterator]() {
//     let val = this.start;
//     return {
//       next: () => ({
//         value: val ** 2,
//         done: val++ === this.end,
//       }),
//     };
//   },
// };
// for (const key of a) {
//   console.log(key);
// }
// const a2 = {
//   start: 1,
//   end: 6,
//   [Symbol.asyncIterator]() {
//     let val = this.start;
//     return {
//       next: () =>
//         Promise.resolve({
//           value: val ** 2,
//           done: val++ === this.end,
//         }),
//     };
//   },
// };
// (async () => {
//   for await (const key of a) {
//     console.log(key);
//   }
// })();

// const cachable = () => {
//   const cache = {};
//   return a => {
//     const res = cache[a];
//     if (res) {
//       console.log('from cache');
//       return res;
//     }
//     console.log('Not from cache');
//     cache[a] = 'id:' + a;
//     return cache;
//   };
// };
// const bb = cachable();

// bb(2);
// bb(2);
// bb(3);
// bb(3);

// const func = (log, ...rest) => {
//   console.log(log.length);
// };
// func(console.log);
// const curry = (fn, ...par) => {
//   const curried = (...args) =>
//     fn.length > args.length ? curry(fn.bind(null, ...args)) : fn(...args);
//   return par.length ? curried(...par) : curried;
// };
// const fn = () => console.log('Callback from timer');
// const setTimeoutCallbackLast = (timeout, fn) => setTimeout(fn, timeout);

// const timer = curry(setTimeoutCallbackLast);
// timer(2000)(fn);
// const timer5s = timer(2000);
// timer5s(fn);

// const curry2 =
//   fn =>
//   (...args) => {
//     if (fn.length > args.length) {
//       const f = fn.bind(null, ...args);
//       return curry2(f);
//     } else {
//       return fn(...args);
//     }
//   };
// const sum4 = (a, b, c, d) => a + b + c + d;

// const ff = curry2(sum4);
// const x1 = ff(1, 2, 3, 4);
// const x2 = ff(1, 2, 3)(4);
// const x3 = ff(1, 2)(3)(4);
// const x4 = ff(1)(2)(3)(4);

// console.dir({
//   x1,
//   x2,
//   x3,
//   x4,
// });

// const user = {
//   set userName(name) {
//     console.log('asd', name);
//     this.name = name;
//   },
//   get userName() {
//     return this.name;
//   },
// };
// user.userName = 'str';
// console.log(user);

// const delayedResult = async () => {
//   return (
//     new Promise() <
//     { user: number } >
//     (pushRes => {
//       setTimeout(() => {
//         pushRes({ user: 2 });
//       }, 1000);
//     })
//   );
// };

// const asyncConstruct = async () => {
//   return {
//     ...{ user: 1 },
//     ...(await delayedResult()),
//   };
// };

// asyncConstruct().then(console.log);

// const map1 = new Map();

// map1.set('0', 'foo');
// map1.set(1, 'bar');
// for (const item of map1) {
//   console.log(item);
// }
// const mySqrt = function (x) {
//   if (x === 0) return 0;
//   for (let i = 1; i <= x; i++) {
//     console.log(i ** i === x, x, i * i, i);
//     if (i * i === x) {
//       return i;
//     }
//     if (i * i > x) {
//       return i - 1;
//     }
//   }
// };
// console.log(mySqrt(0));
// console.log(mySqrt(9));
// var merge = function (nums1, m, nums2, n) {
//   if (nums1.length > m) {
//     console.log(nums1);
//     nums1.splice(m, nums1.length);
//   }

//   if (nums2.length > n) {
//     nums2.splice(n, nums2.length);
//   }

//   nums1.push(...nums2);

//   return nums1.sort();
// };
// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5));
