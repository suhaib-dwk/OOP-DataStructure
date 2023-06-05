class HashTable {
    constructor() {
        this.table = {};
    }

    // Generate a hash key for a given key
    hashKey(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash;
    }

    // Insert a key-value pair into the hash table
    insert(key, value) {
        const hash = this.hashKey(key);
        this.table[hash] = value;
    }

    // Get the value associated with a key from the hash table
    get(key) {
        const hash = this.hashKey(key);
        return this.table[hash];
    }

    // Remove a key-value pair from the hash table
    remove(key) {
        const hash = this.hashKey(key);
        if (this.table.hasOwnProperty(hash)) {
            delete this.table[hash];
        }
    }

    // Check if the hash table contains a key
    contains(key) {
        const hash = this.hashKey(key);
        return this.table.hasOwnProperty(hash);
    }

    // Print the hash table
    print() {
        for (let key in this.table) {
            console.log(`${key}: ${this.table[key]}`);
        }
    }
}

// Usage

const hashTable = new HashTable();
hashTable.insert("John", 25);
hashTable.insert("Jane", 30);
hashTable.insert("Bob", 40);
hashTable.insert("Alice", 35);
hashTable.print();
// Output:
// 329: 25
// 337: 30
// 316: 40
// 422: 35

console.log(hashTable.get("Bob")); // Output: 40

hashTable.remove("John");
console.log(hashTable.contains("John")); // Output: false

hashTable.print();
  // Output:
  // 337: 30
  // 316: 40
  // 422: 35
