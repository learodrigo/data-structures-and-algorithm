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
            const searchTree = (node) => {
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
}

const bst = new Bst()

bst.add(4)
bst.add(2)
bst.add(6)
bst.add(1)
bst.add(3)
bst.add(5)
bst.add(7)

bst.remove(4)

console.log(bst.findMin())
console.log(bst.findMax())

bst.remove(7)

console.log(bst.findMax())
console.log(bst.isPresent(4))

console.log(bst)
