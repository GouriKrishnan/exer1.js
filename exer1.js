
  //Question No:2.......................................................................
  function findMostFrequentItem(arr) {
    if (arr.length === 0) {
      return "Array is empty";
    }
  
    let itemMap = {};
    let mostFrequentItem = arr[0];
  
    // Count the occurrence of each item in the array
    for (let item of arr) {
      if (itemMap[item]) {
        itemMap[item]++;
      } else {
        itemMap[item] = 1;
      }
  
      // Update the most frequent item if needed
      if (itemMap[item] > itemMap[mostFrequentItem]) {
        mostFrequentItem = item;
      }
    }
  
    return `The most frequent item is "${mostFrequentItem}".`;
  }
  
  const myArray = [2, 3, 2, 5, 6, 2, 3];
  const result = findMostFrequentItem(myArray);
  console.log(result); // Output: "The most frequent item is "2"."
 
  


  //Question No:4..............................................................................................

 // function sumOfSquares(arr) {
    //let sum = 0;
  //for (let i = 0; i < arr.length; i++) {
      //sum += arr[i] * arr[i];
    //}
  
    //return sum;
 // }
  //const myArray = [2, 3, 4, 5];
  //const result = sumOfSquares(myArray);
  //console.log(result); //Output:"54"

//Question No:3.......................................................................................

  //for (let i = 0; i <= 15; i++) {
    //if (i % 2 === 0) {
      //console.log( i+' '+ 'is even');
    //} else {
      //console.log( i+' '+ 'is odd');
    //}
  //} //Output:"0 is a even..."

//Question No: 1........................................................................................

//function isPrime(number) {
  //if (number <= 1) {
   // return false;
  //}
  
  //for (let i = 2; i <= Math.sqrt(number); i++) {
    //if (number % i === 0) {
      //return false;
    //}
  //}
  
 // return true;
//}

//function checkFirstElementForPrime(arr) {
 // if (arr.length === 0) {
    //return "Array is empty";
  //}

 // const firstElement = arr[0];
  
 // if (isPrime(firstElement)) {
   // return `${firstElement} is a prime number.`;
  //} else {
  //  return `${firstElement} is not a prime number.`;
  //}
//}

//const myArray = [7, 4, 9, 11];
//const result = checkFirstElementForPrime(myArray);
//console.log(result);} //Output:"7 is a prime number "