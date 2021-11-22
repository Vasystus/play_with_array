// Converting input numbers from user into the array
//let input = document.getElementById("#numbers").value
//let numbers = Array.from(String(numToSeparate), Number);
//grabbing the "result" button
//let result = getElementById("result").value;
// let radioButtons = document.querySelectorAll('input[type="radio"]:checked');

function calculate() {
  console.log("asdasds");
  // Converting input numbers from user into the array
  let input = document.getElementById('numbers').value;
  let numbers = input.replace(' ', ',').split(',');
  let radioButton = document.querySelector(
    'input[name = "function"]:checked'
  ).id;

  switch (radioButton) {
    case 'double_num':
      document.getElementById('result').innerText = twoTimes(numbers);

      break;
    case 'multiply':
      //  byIndex ;
      break;
    case 'filter':
      //  evenNumbers;
      break;
    case 'sum':
      //  sum;
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
//let byIndex = numbers.map(multiply);

// 2. Use the filter method to fill an array with the numbers which are divisible by two

//let evenNumbers = numbers.filter(eachNum => eachNum%2==0);

// 3. Use the reduce method, to return the total of each array

//let sum = numbers.reduce((partial_sum, a) => partial_sum + a, 0);
