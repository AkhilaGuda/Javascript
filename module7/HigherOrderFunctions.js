function doubleNumbers(numbers){
    const doubleNums=numbers.map(num=>num*2);
    return doubleNums;
}
function filterEvenNumbers(numbers){
    const evenNumbers=numbers.filter(num => num%2==0);
    return evenNumbers;
}
function sumNumbers(numbers){
    const totalSum=numbers.reduce((accumulator,currVal)=>{ return accumulator+currVal},0);
    return totalSum;
}
numbers=[1,2,4,5,6,8,10];
console.log("numbers :",numbers);
console.log("doubling numbers using map:",doubleNumbers(numbers));
console.log("even numbers using filter method: ",filterEvenNumbers(numbers));
console.log("sum of numbers using reduce method: ",sumNumbers(numbers));