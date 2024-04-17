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
const b = [1, 2, 3];
const a = {
  start: 1,
  end: 6,
  [Symbol.iterator]() {
    let val = this.start;
    return {
      next: () => ({
        value: val ** 2,
        done: val++ === this.end,
      }),
    };
  },
};
// for (const key of a) {
//   console.log(key);
// }
const a2 = {
  start: 1,
  end: 6,
  [Symbol.asyncIterator]() {
    let val = this.start;
    return {
      next: () =>
        Promise.resolve({
          value: val ** 2,
          done: val++ === this.end,
        }),
    };
  },
};
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

const curry2 =
  fn =>
  (...args) => {
    if (fn.length > args.length) {
      const f = fn.bind(null, ...args);
      return curry2(f);
    } else {
      return fn(...args);
    }
  };
const sum4 = (a, b, c, d) => a + b + c + d;

const ff = curry2(sum4);
const x1 = ff(1, 2, 3, 4);
const x2 = ff(1, 2, 3)(4);
const x3 = ff(1, 2)(3)(4);
const x4 = ff(1)(2)(3)(4);

console.dir({
  x1,
  x2,
  x3,
  x4,
});
