function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

function fib2(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert(fib2(3)); // 2
alert(fib2(7)); // 13

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
