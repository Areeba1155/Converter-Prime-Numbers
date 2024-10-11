// // function compareNumbers() {
// //     var num1 = document.getElementById("num1").value;
// //     var num2 = document.getElementById("num2").value;
// //     var result = document.getElementById("result");
  
// //     if (num1 === "" || num2 === "") {
// //       result.innerHTML = "Please enter both numbers!";
// //       result.style.color = "red";
// //     } 
// //     else {
// //       num1 = Number(num1);
// //       num2 = Number(num2);
  
// //       if (num1 < num2) {
// //         result.innerHTML = num1 + " is less than " + num2;
// //       } 
// //       else if (num1 > num2) {
// //         result.innerHTML = num1 + " is greater than " + num2;
// //       } 
// //       else {
// //         result.innerHTML = num1 + " is equal to " + num2;
// //       }

// //       result.style.color = "green";

// //     }
// //   }
  

// function compareNumbers() {
//   const num1 = parseFloat(document.getElementById('num1').value);
//   const num2 = parseFloat(document.getElementById('num2').value);
//   const resultDiv = document.getElementById('result');
  
//   if (isNaN(num1) || isNaN(num2)) {
//       resultDiv.innerHTML = 'Please enter valid numbers';
//       resultDiv.style.color = 'red';
//       return;
//   }

//   const sum = num1 + num2;
  
//   if (sum > 10) {
//       resultDiv.innerHTML = 'Greater than 10';
//       resultDiv.style.color = 'green';
//   } else {
//       resultDiv.innerHTML = 'Less than 10';
//       resultDiv.style.color = 'green';
//   }
// }



function compareNumbers() {
    // Get the values of both inputs
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    
    // Convert them to numbers: These lines convert the string values from the inputs into integers using parseInt(). This is necessary because input values are always retrieved as strings, but we need them as numbers to perform mathematical comparisons and operations.
    
    const firstNumber = parseInt(num1);
    const secondNumber = parseInt(num2);
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ""; // Clear previous results
  
    // Validate the input fields
    if (!num1 || !num2) {
      resultDiv.innerHTML = "Error: Both fields are required!";
      return;
    } else if (firstNumber >= secondNumber) {
      resultDiv.innerHTML = "Error: The first number should be smaller than the second number!";
      return;
    }
  
    function isPrime(num) {
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return true;
    }
  
    let primes = [];
    for (let i = firstNumber + 1; i < secondNumber; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
  
    if (primes.length > 0) {
      resultDiv.innerHTML = "Prime numbers between " + firstNumber + " and " + secondNumber + ": " + primes.join(', ');
    } 
  }
  