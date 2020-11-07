class Node {
    constructor (ele) {
        this.element = ele
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.length = 0
        this.head = null
    }

    size () {
        return this.length
    }

    head () {
        return this.head
    }

    add (ele) {
        const node = new Node(ele)

        if (!this.head) {
            this.head = node
        }
        else {
            let currentNode = this.head
            while (currentNode.next) currentNode = currentNode.next
            currentNode.next = node
        }

        this.length++
    }

    remove (ele) {
        let currentNode = this.head
        let previousNode

        if (currentNode.element === ele) {
            this.head = currentNode.next
        }
        else {
            while (currentNode.element !== ele) {
                previousNode = currentNode
                currentNode = currentNode.next
            }

            previousNode.next = currentNode.next
        }

        this.length--
    }

    isEmpty () {
        return this.length === 0
    }

    indexOf (ele) {
        let currentNode = this.head
        let index = -1

        while (currentNode) {
            index++
            if (currentNode.element === ele) return index
            currentNode = currentNode.next
        }

        return -1
    }

    elementAt (index) {
        let currentNode = this.head
        let count = 0

        while (count < index) {
            count++
            currentNode = currentNode.next
        }

        return currentNode.element
    }

    addAt (index, ele) {
        const node = new Node(ele)

        let currentNode = this.head
        let previousNode
        let currentIndex = 0

        if (index > this.length) return false

        if (index === 0) {
            node.next = currentNode
            this.head = node
        }
        else {
            while (currentIndex < index) {
                currentIndex++
                previousNode = currentNode
                currentNode = currentNode.next
            }

            node.next = currentNode
            previousNode = node
        }

        this.length++
    }

    removeAt (index) {
        let currentNode = this.head
        let previousNode
        let currentIndex = 0

        if (index < 0 || index >= this.length) return null

        if (index === 0) {
            this.head = currentNode.next
        }
        else {
            while (currentIndex < index) {
                currentIndex++
                previousNode = currentNode
                currentNode = currentNode.next
            }

            previousNode.next = currentNode.next
        }

        this.length--
        return currentNode.element
    }
}



var linkedList = new LinkedList()
linkedList.add('Kitten')
linkedList.add('Puppy')
linkedList.add('Dog')
linkedList.add('Cat')
linkedList.add('Fish')
console.log(linkedList.size())
console.log(linkedList.removeAt(3))
console.log(linkedList.elementAt(3))
console.log(linkedList.indexOf('Puppy'))
console.log(linkedList.size())
