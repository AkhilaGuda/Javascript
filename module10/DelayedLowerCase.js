function delayedLowerCase(word) {
    return new Promise((resolve, reject) => {
        if (typeof word != 'string') {
            reject("Enter valid string");
        } else {
            let ans = word.toLowerCase();
            setTimeout(() => console.log(ans), 5000);
            resolve(ans);
        }
    })
}
function length(word) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(word + " - " + word.length), 500);
    });
}
delayedLowerCase("BEAUTIFULCODE")
    .then(result => length(result))
    .then(length => console.log(length))
    .catch(error => console.error(error));