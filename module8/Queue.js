class Queue{
    constructor(){
        this.items=[];
    }
  
    enqueue(element){
        this.items.push(element);
    }
    
    dequeue(){
        if(this.isEmpty())return null;
        return this.items.shift(); // remove element from front
    }
    front(){
        if(this.isEmpty())return null;
        return this.items[0];//peek from front
    }
    isEmpty(){
        return this.items.length===0;
    }
}

const queue=new Queue();
console.log("created: ",queue);
console.log("Queue is empty ? ", queue.isEmpty());
queue.enqueue(7);
queue.enqueue(20);
queue.enqueue(8);
queue.enqueue(1);
console.log(queue);
console.log("Dequeue element : ",queue.dequeue());
console.log(queue);
console.log("Front element of queue: ",queue.front());