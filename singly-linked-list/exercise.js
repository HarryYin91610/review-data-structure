class Node {
  constructor (element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = new Node('head')
  }

  findByIndex (index) {
    let currentNode = this.head.next
    let pos = 0
    while (currentNode.next !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    if (pos === index) {
      return currentNode
    }
    return -1
  }

  findByValue (element) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.element !== element) {
      currentNode = currentNode.next
    }
    return currentNode.next === null ? -1 : currentNode
  }

  findPreNode (element) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element !== element) {
      currentNode = currentNode.next
    }
    return currentNode.next === null ? -1 : currentNode
  }

  append (element) {
    const node = new Node(element)
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = node
  }

  insert (newnode, refer) {
    const newNode = new Node(newnode)
    const currentNode = this.findByValue(refer)
    if (currentNode === -1) {
      console.log('未找到指定节点')
      return
    }
    newNode.next = currentNode.next
    currentNode.next = newNode
  }

  remove (element) {
    const preNode = this.findPreNode(element)
    if (preNode === -1) {
      console.log('未找到指定节点')
      return
    }
    preNode.next = preNode.next.next
  }

  display () {
    let currentNode = this.head.next
    while (currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }
}

const linkedlist = new LinkedList()

linkedlist.append('a')
linkedlist.append('b')
linkedlist.append('c')
linkedlist.append('d')
linkedlist.append('e')

linkedlist.display()

console.log('------------------')

linkedlist.insert('y', 'c')
linkedlist.display()

console.log('------------------')

linkedlist.remove('y')
linkedlist.display()

console.log('------------------')

linkedlist.findByIndex(3)