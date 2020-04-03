/**
 * 1）单链表的插入、删除、查找操作；
 * 2）链表中存储的是int类型的数据；
 */
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
  // 根据value查找节点
  findByValue (item) {
    let currentNode = this.head
    while (currentNode !== null && currentNode.element !== item) {
      currentNode = currentNode.next
    }
    // console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  } 
  
  // 根据index查找节点，下标从0开始
  findByIndex (index) {
    let currentNode = this.head.next
    let pos = 0
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    // console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }

  // 向链表末尾追加节点
  append(newElement) {
    const newNode = new Node(newElement)
    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
    }
    currentNode.next = newNode
  }
  
  // 指定元素向后插入
  insert (newElement, element) {
    const currentNode = this.findByValue(element)
    if (currentNode === -1) {
      console.log('未找到插入位置')
      return
    }
    const newNode = new Node(newElement)
    newNode.next = currentNode.next
    currentNode.next = newNode
  } 
  
  // 查找前一个
  findPrev (item) {
    let currentNode = this.head
    while (currentNode.next !== null && currentNode.next.element !== item) {
      currentNode = currentNode.next
    }
    if (currentNode.next === null) {
      return -1
    }
    return currentNode
  } 
  
  // 根据值删除
  remove (item) {
    const prevNode = this.findPrev(item)
    if (prevNode === -1) {
      console.log('未找到元素')
      return
    }
    prevNode.next = prevNode.next.next
  }

  //增强尾插法可读性，便于初学者理解
  reverseList () {
    // head节点即哨兵，作用就是使所有链表，包括空链表的头节点不为null,并使对单链表的插入、删除操作不需要区分是否为空表或是否在第一个位置进行，
    // 从而与其他位置的插入、删除操作一致，所以反转链表的时候不需要带上head节点
    let currentNode=this.head.next
    //第一个节点头结点让其指向null
    let previousNode=null
    while(currentNode!==null){
      //务必先保留下一节点的指针地址
      let nextNode=currentNode.next
      //第一次是null
      currentNode.next=previousNode
      //此时将previousNode赋值为当前节点，
      // 那么下次循环的时候，方便下次的currentNode指向previousNode
      previousNode=currentNode
      //抬走，下一个！
      currentNode=nextNode
    }
    //最后将反转好的链表加上头节点
    this.head.next=previousNode
  }

  // 环验证
  checkCircle() {
    let fast = this.head.next
    let slow = this.head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
        if (slow === fast) return true
    }
    return false
  }

  // 删除倒数第k个节点
  removeByIndexFromEnd(index) {
      //务必先判断是否是 环链表
      if(this.checkCircle()) return false
      let pos = 1
      this.reverseList()
      let currentNode = this.head.next
      while (currentNode !== null && pos < index) {
          currentNode = currentNode.next
          pos++
      }
      if (currentNode === null) {
          console.log('无法删除最后一个节点或者该节点不存在')
          return false
      }
      this.remove(currentNode.element)
      this.reverseList()
  }

  // 求中间节点（不算head节点）
  findMiddleNode() {
      let fast = this.head
      let slow = this.head
      while (fast.next !== null && fast.next.next !== null) {
          fast = fast.next.next
          slow = slow.next
      }
      console.log(slow)
      return slow
  }
  
  // 遍历显示所有节点
  display () {
    let currentNode = this.head.next // 忽略头指针的值
    while (currentNode !== null) {
      console.log(currentNode.element)
      currentNode = currentNode.next
    }
  }
}

const mergeSortedLists = (listA, listB) => {
  if (!listA) {
      return listB
  }
  if (!listB) {
      return listA
  }

  let a = listA
  let b = listB
  let resultList = undefined
  if (a.element < b.element) {
      resultList = a
      a = a.next
  } else {
      resultList = b
      b = b.next
  }
  let currentNode = resultList
  while (a !== null && b !== null) {
      if (a.element < b.element) {
          currentNode.next = a
          a = a.next
      } else {
          currentNode.next = b
          b = b.next
      }
      currentNode = currentNode.next
  }

  if (a !== null) {
      currentNode.next = a
  } else if (b !== null){
      currentNode.next = b
  }
  return resultList
}

// Test
// const LList1 = new LinkedList()
// LList1.append('chen')
// LList1.append('curry')
// LList1.append('sang')
// LList1.append('zhao') // chen -> curry -> sang -> zhao
// LList1.display()
// console.log('-------------insert item------------')
// LList1.insert('qian', 'chen') // 首元素后插入
// LList1.insert('zhou', 'zhao') // 尾元素后插入
// LList1.display() // chen -> qian -> curry -> sang -> zhao -> zhou
// console.log('-------------remove item------------')
// LList1.remove('curry')
// LList1.display() // chen -> qian -> sang -> zhao -> zhou
// console.log('-------------find by item------------')
// LList1.findByValue('chen')
// console.log('-------------find by index------------')
// LList1.findByIndex(2)
// console.log('-------------与头结点同值元素测试------------')
// LList1.insert('head', 'sang')
// LList1.display() // chen -> qian -> sang -> head -> zhao -> zhou
// LList1.findPrev('head') // sang
// LList1.remove('head')
// LList1.display() // chen -> qian -> sang -> zhao -> zhou

// console.log('-------------高级操作------------')
// const LList2 = new LinkedList()
// LList2.insert('chen', 'head')
// LList2.insert('curry', 'chen')
// LList2.insert('sang', 'curry')
// LList2.insert('zhao', 'sang')
// LList2.display()
// console.log('-------------start reverse------------')
// LList2.reverseList()
// LList2.display()
// console.log('-------------check circle------------')
// // LList2.findByValue('chen').next = LList2.findByValue('sang')
// console.log(LList2.checkCircle())
// console.log('-------------remove the one before last ------------')
// LList2.removeByIndexFromEnd(2)
// LList2.display()

console.log('-------------list1 ------------')

const sortedList1 = new LinkedList()
sortedList1.insert(1, 'head')
sortedList1.insert(2, 1)
sortedList1.insert(4, 2)
sortedList1.insert(6, 4)

sortedList1.display()

console.log('-------------list2 ------------')

const sortedList2 = new LinkedList()
sortedList2.insert(3, 'head')
sortedList2.insert(4, 3)
sortedList2.insert(5, 4)
sortedList2.insert(8, 5)

sortedList2.display()

console.log('-------------sort two list ------------')
let sortedList = mergeSortedLists(sortedList1.head.next, sortedList2.head.next)
while (sortedList !== null) {
  console.log(sortedList.element)
  sortedList = sortedList.next
}