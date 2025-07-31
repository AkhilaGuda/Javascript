function add(first_num, second_num) {
    return first_num + second_num;
}
function sub(first_num, second_num) {
    return first_num - second_num;
}
function multiply(first_num, second_num) {
    return first_num * second_num;
}
function divide(first_num, second_num) {
    return first_num / second_num;
} 


function calculate(first_num,second_num,operation){
if (operation == "add") {
  console.log(add(first_num, second_num));
}      
else if (operation == "sub") {
  console.log(sub(first_num, second_num));
}    
else if (operation == "multiply") {
  console.log(multiply(first_num, second_num));
}    
else if (operation == "divide") {
  console.log(divide(first_num, second_num));
}    
else{
    console.log("Give a valid operation");
}    
}
calculate(7,20,"add");