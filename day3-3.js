//Algo for finding second largest element in an array
var myArray = new array(2,3,5,6,6);
var maxi = Math.max.apply(null, myArray);
console.log(Math.max.apply(null, myArray.filter((x) => x != maxi)));