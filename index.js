// Write your solution in this file!
// customer name to be in global scope
var customerName = "bob";

function getCustomerName(){
    return customerName;
}
console.log(getCustomerName());


function upperCaseCustomerName() {
   
    if (customerName) {
        customerName = customerName.toUpperCase();
        console.log(customerName);
    } 

    }

var bestCustomer;

function setBestCustomer() {
  bestCustomer = "not bob";
}


function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    bestCustomer = undefined;
  }
  
  const leastFavoriteCustomer = 'someone';
  
  function changeLeastFavoriteCustomer() {
    throw new Error('Assignment to constant variable.');
  }
   
   console.log(bestCustomer === undefined);

  setBestCustomer();
  console.log(bestCustomer); 
  
  overwriteBestCustomer();
  console.log(bestCustomer); 
  
 
  console.log(() => changeLeastFavoriteCustomer()); 
  console.log(bestCustomer === undefined);


