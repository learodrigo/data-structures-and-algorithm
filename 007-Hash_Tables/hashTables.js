class HashTable {
    constructor () {
        this.storage = []
        this.storageLimit = 100
    }

    hash (string, max) {
        let hash = 0
        string.split('').map((_, i) => hash += string.charCodeAt(i))
        return hash % max
    }

    print () {
        console.log(this.storage)
    }

    add (key, value) {
        const index = this.hash(key, this.storageLimit)

        if (!this.storage[index]) {
            this.storage[index] = [ [key, value] ]
        }
        else {
            let inserted = false

            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    this.storage[index][i][1] = value
                    inserted = true
                }
            }

            if (!inserted) this.storage[index].push([key, value])
        }
    }

    remove (key) {
        const index = this.hash(key, this.storageLimit)

        if (this.storage[index].length === 1 && this.storage[index][0][0] === key) {
            delete this.storage[index]
        }
        else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i]
                }
            }
        }
    }

    lookup (key) {
        const index = this.hash(key, this.storageLimit)

        if (!this.storage[index]) {
            return undefined
        }
        else {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1]
                }
            }
        }
    }
}

const hashTable = new HashTable()
hashTable.add('beau', 'person')
hashTable.add('fido', 'dog')
hashTable.add('rex', 'dinosour')
hashTable.add('tux', 'penguin')

console.log('lookup(tux):', hashTable.lookup('tux'))
hashTable.print()

console.log(hashTable)
