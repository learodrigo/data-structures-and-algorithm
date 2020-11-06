class Node {
    constructor (data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}

class Bst {
    constructor () {
        this.root = null
    }

    add (data) {
        const node = this.root

        if (!node) {
            this.root = new Node(data)
            return
        }
        else {
            const searchTree = node => {
                if (data < node.data) {
                    if (!node.left) {
                        node.left = new Node(data)
                        return
                    }
                    else if (node.left) {
                        return searchTree(node.left)
                    }
                }
                else if (data > node.data) {
                    if (!node.right) {
                        node.right = new Node(data)
                        return
                    }
                    else if (node.right) {
                        return searchTree(node.right)
                    }
                }
                else {
                    return null
                }
            }

            return searchTree(node)
        }
    }

    findMin () {
        let current = this.root
        while (current.left) current = current.left

        return current.data
    }

    findMax () {
        let current = this.root
        while (current.right) current = current.right
        return current.data
    }

    find (data) {
        let current = this.root

        while (current.data !== data) {
            current = (data < current.data) ? current.left : current.right
            if (!current) return null
        }

        return current
    }

    isPresent (data) {
        let current = this.root

        while (current) {
            if (data === current.data) return true
            current = (data < current.data) ? current.left : current.right
        }

        return false
    }

    remove (data) {
        const removeNode = (node, data) => {
            if (!node) return null
            if (data === node.data) {
                if (!node.left && !node.right) return null
                if (!node.left) return node.right
                if (!node.right) return node.left

                let tempNode = node.right
                while (tempNode.left) tempNode = tempNode.left

                node.data = tempNode.data
                node.right = removeNode(node.right, tempNode.data)

                return node
            }
            else if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            }
            else {
                node.right = removeNode(node.right, data)
                return node
            }
        }

        this.root = removeNode(this.root, data)
    }

    isBalanced () {
        return this.findMinHeight() >= this.findMaxHeight() - 1
    }

    findMinHeight (node = this.root) {
        if (!node) return -1

        const left = this.findMinHeight(node.left)
        const right = this.findMinHeight(node.right)

        return (left < right) ? left + 1 : right + 1
    }

    findMaxHeight (node = this.root) {
        if (!node) return -1

        const left = this.findMaxHeight(node.left)
        const right = this.findMaxHeight(node.right)

        return (left > right) ? left + 1 : right + 1
    }

    inOrder () {
        if (!this.root) return null

        const result = []

        const traverseInOrder = node => {
            // short circular evaluation
            node.left && traverseInOrder(node.left)
            result.push(node.data)
            node.right && traverseInOrder(node.right)
        }

        traverseInOrder(this.root)
        return result
    }

    preOrder () {
        if (!this.root) return null

        const result = []

        const traversePreOrder = node => {
            result.push(node.data)
            // short circular evaluation
            node.left && traversePreOrder(node.left)
            node.right && traversePreOrder(node.right)
        }

        traversePreOrder(this.root)
        return result
    }

    postOrder () {
        if (!this.root) return null

        const result = []

        const traversePostOrder = node => {
            // short circular evaluation
            node.left && traversePostOrder(node.left)
            node.right && traversePostOrder(node.right)
            result.push(node.data)
        }

        traversePostOrder(this.root)
        return result
    }

    levelOrder () {
        const result = []
        const q = []

        if (this.root) {
            q.push(this.root)

            while (q.length > 0) {
                const node = q.shift()
                result.push(node.data)

                if (node.left) q.push(node.left)
                if (node.right) q.push(node.right)
            }

            return result
        }
        else {
            return null
        }
    }
}

const bst = new Bst()

bst.add(9)
bst.add(4)
bst.add(17)
bst.add(3)
bst.add(6)
bst.add(22)
bst.add(5)
bst.add(7)
bst.add(20)

console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.isBalanced())

bst.add(10)

console.log(bst.findMinHeight())
console.log(bst.findMaxHeight())
console.log(bst.isBalanced())
console.log('inOrder: ' + bst.inOrder())
console.log('preOrder: ' + bst.preOrder())
console.log('postOrder: ' + bst.postOrder())

console.log('levelOrder: ' + bst.levelOrder())
