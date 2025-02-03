//Task 1

let purchaseAmount = 277; // Here a variable is being declared 

if (purchaseAmount > 100) { // Recognizes whether the discount is more than $100
        console.log("Discount has been applied!");  // Discount is displayed
      } else {
        console.log("Discount is not applicable");  // Discount is not displayed
      }
    console.log("Total value after the applied discount: $${finaltotalAmount}"); // Disount is applicable and displayed

//Task 2

let sales = [120,140,160,180,200];// Sales array along with their figures are declared
for (let i = 0; i <= sales.length; i++) {  // The loops is running from 120-200 and increases in increments of i
    console.log("Total sales:, $${totalSales}");  // Display the number being repeated 
  }

  //Task 3

  let stock = 10 // This is the inital value of the stock
  while (stock = 0) {  // This loop runs and will stop once it is at 0
    console.log("The present stock is: ", stock);  // Display the present stock value
    count++;  // 
  }

  // Task 4

  let responses = 0// Inital amount ;
  do {
    console.log ("Amount of responses: ${responses}");

    responses++;
 } while (responses < 3) {  // This loop runs and will stop once it is at 3
        console.log("Survey responses were received!", responses);// 

// Task 5

let employee = {
    name: "Roxanne",
    position: "IT Business Analyst",
    salary: 65000 }
 };
 for (let key in employee) {
    console.log("${key} ${employee[key]}")  // This represent property and the value
 } 

 //Task 6

 let products = [ "Purse", "Watch", "Suitcase"]; // These products are within the array

 for (let product of products) {
    console.log("${product: ${product}");
 }

 //Task 7
 let orders =[100,200,200]// Orders with the array
  orders.forEach(order=> {
    console.log ("The ID for the order is:${order}");
  });

  //Task 8
  function calculateTax(amount, taxRate) 
  {
    return amount * taxRate;
  }

  let tax = calculateTax(3500, .5);

  console.log ("tax:$${tax}");

  //Task 9-

  const applyDiscount = function(price, discountPercentage) { 
    return price - (price * (discountPercentage/ 100)) ;
  };
let discountedPrice = applyDiscount (450,5)
  console.log("Price with the discount: $${discountedPrice}"); 

//Task 10: 
const calculatePoints = (purchaseAmount) => `Balance, ${purchaseAmount}!`;  // Show purchase amount
console.log(greet("Here all your loyalty points!!")); // display the greeting for loyalty points







 
