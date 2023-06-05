class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add a node to the end of the linked list
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    // Insert a node at a specific position in the linked list
    insertAt(data, position) {
        if (position < 0 || position > this.size) {
            console.log("Invalid position");
            return;
        }

        const newNode = new Node(data);

        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let current = this.head;
            let prev = null;
            let index = 0;

            while (index < position) {
                prev = current;
                current = current.next;
                index++;
            }

            newNode.next = current;
            prev.next = newNode;
        }

        this.size++;
    }

    // Remove a node from the linked list
    remove(data) {
        let current = this.head;
        let prev = null;

        while (current) {
            if (current.data === data) {
                if (prev === null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }

                if (current === this.tail) {
                    this.tail = prev;
                }

                this.size--;
                return;
            }

            prev = current;
            current = current.next;
        }

        console.log("Node not found");
    }

    // Print the linked list
    print() {
        let current = this.head;
        let list = "";

        while (current) {
            list += current.data + " -> ";
            current = current.next;
        }

        list += "null";
        console.log(list);
    }
}

// Usage

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.print(); // Output: 10 -> 20 -> 30 -> null

linkedList.insertAt(15, 1);
linkedList.print(); // Output: 10 -> 15 -> 20 -> 30 -> null

linkedList.remove(20);
linkedList.print(); // Output: 10 -> 15 -> 30 -> null
