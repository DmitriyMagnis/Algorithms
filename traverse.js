const dfs = root => {
  const stack = [root];
  let resultSequence = '';

  while (stack.length) {
    const vertex = stack.pop();
    resultSequence += vertex.value + '--> ';
    if (vertex.children?.length) {
      stack.push(...vertex.children);
    }
  }
  console.log(resultSequence);
};
const bfs = root => {
  const queue = [root];
  let resultSequence = '';

  while (queue.length) {
    const vertex = queue.shift();
    resultSequence += vertex.value + '--> ';
    if (vertex.children?.length) {
      queue.push(...vertex.children);
    }
  }
  console.log(resultSequence);
};

const graph = {
  value: '1',
  children: [
    {
      value: '2',
      children: [
        {
          value: '3',
          children: null,
        },
      ],
    },
    {
      value: '4',
      children: [
        {
          value: '5',
          children: null,
        },
        {
          value: '6',
          children: null,
        },
      ],
    },
  ],
};

dfs(graph);
bfs(graph);
