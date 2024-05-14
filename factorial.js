const iter = (product, counter, maxCount) => {
  if (maxCount < counter) {
    return product;
  }
  return iter(product * counter, ++counter, maxCount);
};

const fact = n => {
  return iter(1, 1, n);
};

console.log(fact(6));
