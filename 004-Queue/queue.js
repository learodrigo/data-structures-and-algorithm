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

const queue = new Queue()

queue.enqueue('a')
queue.enqueue('b')
queue.enqueue('c')

queue.print()

queue.dequeue()

console.log(queue.front())

queue.print()

console.log(queue)
