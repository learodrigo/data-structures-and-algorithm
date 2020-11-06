class Stack {
    constructor () {
        this.count = 0
        this.storage = []
    }

    push (value) {
        this.storage[this.count] = value
        this.count++
    }

    pop () {
        if (!this.count) return undefined

        this.count--
        const result = this.storage[this.count]
        delete this.storage[this.count]
        return result
    }

    size () {
        return this.count
    }

    peek () {
        return this.storage[this.count - 1]
    }
}

const myStack = new Stack()

myStack.push(123)
myStack.push(234)
myStack.push(345)
console.log(myStack)
console.log('peek', myStack.peek())
console.log('pop', myStack.pop())
console.log('peek', myStack.peek())
