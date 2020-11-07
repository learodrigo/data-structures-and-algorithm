class Node {
    constructor () {
        this.keys = new Map()
        this.end = false
    }

    setEnd () {
        this.end = true
    }

    isEnd () {
        return this.end
    }
}

class Trie {
    constructor () {
        this.root = new Node()
    }

    add (input, node = this.root) {
        if (!input.length) {
            node.setEnd()
            return
        }
        else if (!node.keys.has(input[0])) {
            node.keys.set(input[0], new Node())
            return this.add(input.substr(1), node.keys.get(input[0]))
        }
        else {
            return this.add(input.substr(1), node.keys.get(input[0]))
        }
    }

    isWord (word) {
        let node = this.root

        while (word.length > 1) {
            if (!node.keys.has(word[0])) {
                return false
            }
            else {
                node = node.keys.get(word[0])
                word = word.substr(1)
            }
        }

        return node.keys.has(word) && node.keys.get(word).isEnd()
    }

    values () {
        let words = []

        const search = (node, string) => {
            if (node.keys.size) {
                for (const letter of node.keys.keys()) {
                    search(node.keys.get(letter), string.concat(letter))
                }

                node.isEnd() && words.push(string)
            }
            else {
                string.length && words.push(string)
            }
        }

        search(this.root, new String())
        return words.length ? words : null
    }

    print () {
        const values = this.values()
        console.table(values)
    }
}

const trie = new Trie()

trie.add('ball')
trie.add('bat')
trie.add('doll')
trie.add('dark')
trie.add('do')
trie.add('dorm')
trie.add('send')
trie.add('sense')

console.log(trie.isWord('doll'))
console.log(trie.isWord('dor'))
console.log(trie.isWord('dorf'))

trie.print()

console.log('Full trie:', trie)
