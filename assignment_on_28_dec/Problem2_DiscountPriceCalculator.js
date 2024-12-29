// Problem Statement: A store offers a 10% discount on items priced more than $20. Develop a program to calculate and display the final price after the discount if applicable.

function discountPrice(price) {
  if (price < 0) {
    console.log("Invalid price, the price must be a non-negative number.");
    return;
  }
  if (price > 20) {
    let finalPrice = (price - (price * 10) / 100).toFixed(2);
    console.log(`The final price of the item is: ${finalPrice}`);
    return;
  } else {
    console.log(`The final price of the item is: ${price}`);
  }
}

discountPrice(25);
discountPrice(20);
discountPrice(15);
discountPrice(-15);
