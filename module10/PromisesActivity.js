function delay(millisec) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => { resolve("hello from delay function"); }, millisec);
    });
}
delay(1000).then(message => console.log(message));//prints after 1sec
console.log("hi");//prints immediately