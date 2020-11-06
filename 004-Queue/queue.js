class Queue {
    constructor () {
        this.collection = []
    }

    print () {
        console.log(this.collection)
    }

    enqueue (ele) {
        this.collection.push(ele)
    }

    dequeue () {
        this.collection.shift()
    }

    front () {
        return this.collection[0]
    }

    size () {
        return this.collection.length
    }

    isEmpty () {
        return this.collection.length === 0
    }
}

console.log('---- Normal queue')

const q = new Queue()

q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.print()
q.dequeue()
console.log(q.front())
q.print()
