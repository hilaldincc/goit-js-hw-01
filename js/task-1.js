function makeTransaction(quantity, pricePerDoid) {
    const totalPrice = quantity * pricePerDoid;
    return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}  

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));