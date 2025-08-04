let inventory = [{ name: "pen", price: 10, quantity: 20 }, { name: "Notebook", price: 30, quantity: 30 }];

function addProduct(product){
    inventory.push(product);
}

function removeProduct(productName){
    inventory=inventory.filter(product => product.name !==productName);
}

function updateQuantity(productName,newQuantity){
    const product=inventory.filter(prod => prod.name === productName);
    if(product){
        product.quantity=newQuantity;
    }
    else{
        console.log("Product not found in inventory.");
    }
}

function calculateTotalValue(){
    let total=0;
    for (const product of inventory){
        total=total+(product.price * product.quantity);
    }
    return total;
}
function listProducts(){
    console.log("Inventory products ");
    inventory.forEach(product => {
        console.log(`Name: ${product.name}, Price: ${product.price}, Quantity: ${product.quantity}`);
    });
}
listProducts();

console.log('\nAdding product pencil,price:2, quantity:200');
addProduct({ name: "Pencil", price: 2, quantity: 200 });
listProducts();

console.log('\nRemoving product Notebook');
removeProduct("Notebook");
listProducts();

console.log("\nUpdating pen quantity to 120");
updateQuantity("Pen", 120);
listProducts();

console.log("\nTotal Value:", calculateTotalValue());
listProducts();
