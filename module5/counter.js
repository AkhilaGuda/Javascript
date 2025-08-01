function createCounter(){
    let count=0;//local variable not accesible outside the function
    return {
        increment : function(){
            count++;
            return count;
        },
        decrement : function(){
            count--;
            return count;
        }
    };
}
const counter=createCounter();
console.log(counter.increment());//1
console.log(counter.increment());//2
console.log(counter.increment());//3
console.log(counter.decrement());//2
console.log(counter.decrement());//1
console.log(counter.decrement());//0