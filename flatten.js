'use strict';

const flatten1 = arr => {
  const res = [];
  const stack = [];
  stack.push(...arr);

  while (stack.length) {
    const current = stack.pop();

    if (Array.isArray(current)) stack.push(...current);
    else res.push(current);
  }
  return res;
};

const flatten = arr => {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const fl = flatten(arr[i]);
      res.push(...fl);
    } else res.push(arr[i]);
  }

  return res;
};

console.log(flatten([[1], [[[5]]], [[2, 3]], 4]));
