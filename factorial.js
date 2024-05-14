const fact = maxCount => {
  const iter = (product, counter) => {
    if (maxCount < counter) {
      return product;
    }
    return iter(product * counter, ++counter, maxCount);
  };
  return iter(1, 1, n);
};

console.log(fact(6));
