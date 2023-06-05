class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into the binary tree
    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    // Helper method to insert a node into the binary tree
    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Perform an in-order traversal of the binary tree
    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left);
            console.log(node.value);
            this.inOrderTraversal(node.right);
        }
    }

    // Perform a pre-order traversal of the binary tree
    preOrderTraversal(node) {
        if (node !== null) {
            console.log(node.value);
            this.preOrderTraversal(node.left);
            this.preOrderTraversal(node.right);
        }
    }

    // Perform a post-order traversal of the binary tree
    postOrderTraversal(node) {
        if (node !== null) {
            this.postOrderTraversal(node.left);
            this.postOrderTraversal(node.right);
            console.log(node.value);
        }
    }
}

// Usage

const binaryTree = new BinaryTree();
binaryTree.insert(50);
binaryTree.insert(30);
binaryTree.insert(70);
binaryTree.insert(20);
binaryTree.insert(40);
binaryTree.insert(60);
binaryTree.insert(80);

console.log("In-order traversal:");
binaryTree.inOrderTraversal(binaryTree.root);

console.log("Pre-order traversal:");
binaryTree.preOrderTraversal(binaryTree.root);

console.log("Post-order traversal:");
binaryTree.postOrderTraversal(binaryTree.root);
