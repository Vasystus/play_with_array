

//create function to calculate the result

function calculate() {

  // Converting input numbers from user into the array
    let input = document.getElementById('numbers').value;
    let numbers = input.replace(' ', ',').split(',').map(Number);
    
  //check if radio button is selected
     let radioButton = document.querySelector(
      'input[name = "function"]:checked'
     ).id;
  //depends which radio button is selected call the certain function
    switch (radioButton) {
       case 'double_num':
         document.getElementById('result').innerText = twoTimes(numbers);
         break;
  
       case 'multiply':
         document.getElementById('result').innerText = byIndex(numbers);
         break;
  
       case 'filter':
         document.getElementById('result').innerText = evenNumbers(numbers);
         break;
  
       case 'sum':
        document.getElementById('result').innerText = findSum(numbers);
        break;
  
       default:
        document.getElementById('result').innerText = "Function not implemented yet: " + radioButton;
    }
  }
  
  // Write a function which doubles the number it's given
  
  function doubleNum(num) {
    return num * 2;
  }
  function twoTimes(numbers) {
    return numbers.map(doubleNum);
  }
  
  // Use the map method to multiply the element by its index
  
  function multiply(num, index) {
    return num * index;
  }
  function byIndex(numbers) { 
    return numbers.map(multiply);
  }
  // Use the filter method to fill an array with the numbers which are divisible by two
  
  function evenNumbers(numbers) {
    return numbers.filter(eachNum => eachNum%2==0);
  }
  // Use the reduce method, to return the total of the array
  
  function findSum(numbers) {
    return numbers.reduce((previousValue, currentValue) =>   previousValue + currentValue,0);
  } // with initial value to avoid when the array is empty
  