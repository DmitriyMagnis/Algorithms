// When we run it, there are two if execution branches:

// If passed args count is the same or more than the original function has in its definition (func.length) , then just pass the call to it using func.apply.
// Otherwise, get a partial: we don’t call func just yet. Instead, another wrapper is returned, that will re-apply curried providing previous arguments together with the new ones.
// Then, if we call it, again, we’ll get either a new partial (if not enough arguments) or, finally, the result.

const add = (a, b, c) => a + b + c;

//Суть в том, что бы склевать рекурсивно аргументы до выполнения условия, тогда остановиться
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

const curriedSum = curry(add);

console.log(curriedSum(1, 2, 3)); // 6
console.log(curriedSum(1)(3, 3)); // 7
console.log(curriedSum(1)(4)(5)); // 10
