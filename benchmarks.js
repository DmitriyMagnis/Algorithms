'use strict';

const LOOP_COUNT = 50000;

const fn = () => {
  const a = [];
  for (let i = 0; i < LOOP_COUNT; i++) {
    a.push(Array(i).join('A').length);
  }
  return a;
};

console.log();

console.time('experiment');
const res1 = fn();
console.log('res.length', res1.length);
console.timeEnd('experiment');
