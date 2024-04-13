class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) this.head = node;
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) this.head = node;
    else {
      const prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }
}

const list1 = [1, 2, 4],
  list2 = [1, 3, 4];

const merge = (list1, list2) => {
  const res = [];
  while (list1.length || list2.length) {
    if (list1[0] <= list2[0]) {
      res.push(list1.shift());
    } else res.push(list2.shift());
  }
  console.log(list1, list2);
  return res;
};
console.log(merge(list1, list2));
