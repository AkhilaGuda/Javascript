let globalVar="Iam global variable ";//global scope variable
function scopeExercise(){
    var localVar="Iam local variable";//function scope variable
    console.log("Accessing global variable :"+globalVar);
    console.log("local scope variable : "+localVar);
    if(localVar){
        //block scope variables
        let num1=10;
        console.log("Accesing block scope variables inside the block :"+num1);
        console.log("accesing global variable inside the block: "+globalVar);
        console.log("accesing local variable inside block scope : "+localVar);
        if(num1){
            let num2=5;
            let result=num1-num2;
            console.log("scope chaining : "+result);
            console.log("inner block ");
        }
        try{
            console.log("inner block variable accesing from outer block "+num2);
        }
        catch(error){
            console.log("inner block variable accesing from outer block "+error.message);
        }
    }
    try {
        console.log("accesing block scope variable outside the block : "+ num1);
    }
    catch(error){
        console.log("Accesing block scope variable with let outside block "+ error.message);
    }
}
scopeExercise();

//accesing function variables outside function scope
try{
    console.log("Accesing function variable outside function "+localVar);
}
catch(error){
    console.log("accesing function scope variable outside function :"+error.message);
}