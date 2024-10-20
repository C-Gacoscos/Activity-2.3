let arr1 = ["Cecile", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let combinedArr = arr1.concat(arr2);
console.log("Combined Array:", combinedArr);

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log("Fruits after push:", fruits); 

let array1 = [1, 2, 3];
array1.unshift(4, 5);
console.log("Array1 after unshift:", array1); 

let lastFruit = fruits.pop();
console.log("Fruits after pop:", fruits); 
console.log("Removed fruit:", lastFruit); 

let array2 = [1, 2, 3];
let firstElement = array2.shift();
console.log("Array2 after shift:", array2); 
console.log("Removed first element:", firstElement); 

fruits.sort();
console.log("Fruits sorted alphabetically:", fruits); 

let slicedFruits = fruits.slice(1, 3); 
console.log("Sliced fruits:", slicedFruits); 

let months = ["January", "February", "March", "April"];
months.splice(2, 1, "May", "June"); 
console.log("Months after splice:", months); 