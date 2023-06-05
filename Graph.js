class Graph {
    constructor() {
        this.vertices = {};
    }

    // Add a vertex to the graph
    addVertex(vertex) {
        if (!this.vertices[vertex]) {
            this.vertices[vertex] = [];
        }
    }

    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.vertices[vertex1] && this.vertices[vertex2]) {
            this.vertices[vertex1].push(vertex2);
            this.vertices[vertex2].push(vertex1);
        }
    }

    // Get the neighbors of a vertex
    getNeighbors(vertex) {
        if (this.vertices[vertex]) {
            return this.vertices[vertex];
        }
        return [];
    }

    // Remove an edge between two vertices
    removeEdge(vertex1, vertex2) {
        if (this.vertices[vertex1] && this.vertices[vertex2]) {
            this.vertices[vertex1] = this.vertices[vertex1].filter(
                (v) => v !== vertex2
            );
            this.vertices[vertex2] = this.vertices[vertex2].filter(
                (v) => v !== vertex1
            );
        }
    }

    // Remove a vertex from the graph
    removeVertex(vertex) {
        if (this.vertices[vertex]) {
            for (let adjacentVertex of this.vertices[vertex]) {
                this.removeEdge(vertex, adjacentVertex);
            }
            delete this.vertices[vertex];
        }
    }

    // Print the graph
    print() {
        for (let vertex in this.vertices) {
            const neighbors = this.vertices[vertex];
            console.log(`${vertex}: ${neighbors.join(", ")}`);
        }
    }
}

// Usage

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");
graph.print();
// Output:
// A: B, D
// B: A, C
// C: B, D
// D: C, A

console.log(graph.getNeighbors("C")); // Output: [ 'B', 'D' ]

graph.removeEdge("C", "D");
graph.removeVertex("A");
graph.print();
  // Output:
  // B: C
  // C: B
