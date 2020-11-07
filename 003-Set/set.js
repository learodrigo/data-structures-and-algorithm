class MySet {
    constructor () {
        this.collection = []
    }

    has (ele) {
        return this.collection.indexOf(ele) !== -1
    }

    values () {
        return this.collection
    }

    add (ele) {
        if (!this.has(ele)) {
            this.collection.push(ele)
            return true
        }

        return false
    }

    remove (ele) {
        if (this.has(ele)) {
            const index = this.collection.indexOf(ele)
            this.collection.slice(index, 1)

            return true
        }

        return false
    }

    size () {
        return this.collection.length
    }

    // From here, not included in built-in Set object
    union (otherSet) {
        const unionSet = new MySet()
        const firstSet = this.values()
        const secondSet = otherSet.values()

        firstSet.map(e => unionSet.add(e))
        secondSet.map(e => unionSet.add(e))

        return unionSet
    }

    intersection (otherSet) {
        const interSet = new MySet()
        const firstSet = this.values()
        firstSet.filter(e => otherSet.has(e)).map(e => interSet.add(e))

        return interSet
    }

    difference (otherSet) {
        const difSet = new MySet()
        const firstSet = this.values()
        firstSet.filter(e => !otherSet.has(e)).map(e => difSet.add(e))

        return difSet
    }

    subset (otherSet) {
        const firstSet = this.values()

        return firstSet.every(value => otherSet.has(value))
    }
}

const setA = new MySet()
const setB = new MySet()

setA.add('a')
setB.add('b')
setB.add('c')
setB.add('a')
setB.add('d')

console.log(setA)
console.log(setB)

console.log(setA.subset(setB))
console.log(setA.intersection(setB).values())

console.log('setA', setA)
console.log('setB', setB)
