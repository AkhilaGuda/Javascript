class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift(); // remove element from front
    }
    front() {
        if (this.isEmpty()) return null;
        return this.items[0];//peek from front
    }
    isEmpty() {
        return this.items.length === 0;
    }
    display() {
        console.log(this.items);
    }
}

const queue = new Queue();
console.log("created: ", queue);
console.log("Queue is empty ? ", queue.isEmpty());
queue.enqueue(7);
queue.enqueue(20);
queue.enqueue(8);
queue.enqueue(1);
queue.display();
console.log("Dequeue element : ", queue.dequeue());
queue.display();
console.log("Front element of queue: ", queue.front());
console.log(queue instanceof Queue);
// The instanceof operator checks whether an object is an instance of  a specific constructor or class.
//  syntax: object instanceof Constructor. return true is the object created using the constructor or its prototype is in the prototype chain 
// otherwise false.
