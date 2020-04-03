class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.head = new Node('head');
  }

  append (value) {
    let current = this.head;

    while (current.next) {
      current = current.next
    }
    
    current.next = new Node(value);
  }

  findNodeByValue (value) {
    let current = this.head.next;

    while (current && current.value !== value) {
      current = current.next;
    }

    return current || -1;
  }

  findPreNode (value) {
    let current = this.head;

    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (!current.next) { return -1; }

    return current;
  }

  insert (value, referV) {
    const current = this.findNodeByValue(referV);
    if (current === -1) {
      console.error('找不到插入值得位置！')
      return
    }
    const newNode = new Node(value);
    newNode.next = current.next;
    current.next = newNode;
  }

  remove (value) {
    const preNode = this.findPreNode(value);
    if (preNode === -1) {
      console.error('找不到删除位置！');
      return;
    }
    preNode.next = preNode.next.next;
  }

  reverseList () {
    let current = this.head.next;
    let preNode = null;

    while (current) {
      let nextNode = current.next;
      current.next = preNode;
      preNode = current;
      current = nextNode;
    }

    this.head.next = preNode;
  }

  checkCircle () {
    let slow = this.head;
    let fast = this.head.next;
    let isCircle = false;

    while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast.value === slow.value) { 
        isCircle = true;
        break;
      }
    }

    return isCircle;
  }

  display () {
    let current = this.head.next;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

// 测试
const list1 = new LinkedList();

list1.append(2);
list1.append(4);
list1.append(6);
list1.append(8);

list1.display();

console.log('=======================')

list1.insert(5, 4);
list1.insert(7, 6);

list1.display();

console.log('=======================')

list1.remove(6);

list1.display();

console.log('=======================')

list1.reverseList();

list1.display();

console.log(list1.checkCircle());

list1.findNodeByValue(2).next = list1.findNodeByValue(5);

console.log(list1.checkCircle());
