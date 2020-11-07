class PriorityQueue {
    constructor () {
        this.collection = []
    }

    print () {
        console.log(this.collection)
    }

    enqueue (ele) {
        if (this.isEmpty()) {
            this.collection.push(ele)
        } else {
            let added = false

            for (let i = 0; i < this.collection.length; i++) {
                if (ele[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, ele)
                    added = true
                    break
                }
            }

            if (!added) this.collection.push(ele)
        }
    }

    dequeue () {
        const value = this.collection.shift()
        return value[0]
    }

    front () {
        return this.collection[0]
    }

    size () {
        return this.collection.length
    }

    isEmpty () {
        this.collection.length === 0
    }
}

console.log('---- Priority queue')

const priorityQueue = new PriorityQueue()

priorityQueue.enqueue(['Beau Carnes', 2])
priorityQueue.enqueue(['Quincy Larson', 3])
priorityQueue.enqueue(['Ewa Mitulska-Wojcik', 1])
priorityQueue.enqueue(['Brian Swift', 2])

priorityQueue.print()

priorityQueue.dequeue()

console.log('front', priorityQueue.front())

priorityQueue.print()

console.log(priorityQueue)
