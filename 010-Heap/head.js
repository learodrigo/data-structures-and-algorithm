class MinHeap {
    constructor() {
        this.heap = [null]
    }

    insert(num) {
        this.heap.push(num)

        if (this.heap.length > 2) {
            let idx = this.heap.length - 1
            const halfIdx = Math.floor(idx / 2)

            while (this.heap[idx] < this.heap[halfIdx]) {
                if (idx >= 1) {
                    // Swapping values - destructuring expression
                    [this.heap[halfIdx], this.heap[idx]] = [this.heap[idx], this.heap[halfIdx]]

                    if (halfIdx > 1) {
                        idx = halfIdx
                    }
                    else {
                        break
                    }
                }
            }
        }
    }

    remove() {
        const smallest = this.heap[1]

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length == 3) {
                if (this.heap[1] > this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }

                return smallest
            }

            let i = 1
            let left = 2 * i
            let right = 2 * i + 1

            while (this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]) {
                if (this.heap[left] < this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
                    i = 2 * i
                }
                else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]]
                    i = 2 * i + 1
                }

                left = 2 * i
                right = 2 * i + 1

                if (!this.heap[left] || !this.heap[right]) {
                    break
                }
            }
        }
        else if (this.heap.length == 2) {
            this.heap.splice(1, 1)
        }
        else {
            return null
        }

        return smallest
    }

    sort () {
        const result = []
        while (this.heap.length > 1) result.push(this.remove())
        return result
    }
}

class MaxHeap {
    constructor() {
        this.heap = [null]
    }

    print() {
        return this.heap
    }

    insert(num) {
        this.heap.push(num)

        if (this.heap.length > 2) {
            let idx = this.heap.length - 1
            const halfIdx = Math.floor(idx / 2)

            while (this.heap[idx] > this.heap[halfIdx]) {
                if (idx >= 1) {
                    // Swapping values - destructuring expression
                    [this.heap[halfIdx], this.heap[idx]] = [this.heap[idx], this.heap[halfIdx]]

                    if (halfIdx > 1) {
                        idx = halfIdx
                    }
                    else {
                        break
                    }
                }
            }
        }
    }

    remove() {
        const smallest = this.heap[1]

        if (this.heap.length > 2) {
            this.heap[1] = this.heap[this.heap.length - 1]
            this.heap.splice(this.heap.length - 1)

            if (this.heap.length == 3) {
                if (this.heap[1] < this.heap[2]) {
                    [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]]
                }

                return smallest
            }

            let i = 1
            let left = 2 * i
            let right = 2 * i + 1

            while (this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]) {
                if (this.heap[left] > this.heap[right]) {
                    [this.heap[i], this.heap[left]] = [this.heap[left], this.heap[i]]
                    i = 2 * i
                }
                else {
                    [this.heap[i], this.heap[right]] = [this.heap[right], this.heap[i]]
                    i = 2 * i + 1
                }

                left = 2 * i
                right = 2 * i + 1

                if (!this.heap[left] || !this.heap[right]) {
                    break
                }
            }
        }
        else if (this.heap.length == 2) {
            this.heap.splice(1, 1)
        }
        else {
            return null
        }

        return smallest
    }
}
