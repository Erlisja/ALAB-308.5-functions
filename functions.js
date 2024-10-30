// ========= FUNCTIONS =======


// Part 1: Thinking Functionally

//1. Take an array of numbers and return the sum.
let numArr = [1,2,3,6];
function sum(nums){
    let sum = 0;
    for(let num of nums){
        sum +=num
    }
    return sum
}
console.log(`The sum of numbers in the array is: ${sum(numArr)}`);

//2. Take an array of numbers and return the average.
let numbs = [2,3,1,3,1]
function avg(numbArr){
    let sum=0
    for (let num of numbArr){
        sum +=num;
    }
    return sum/numbArr.length
}
console.log(`The average is: ${avg(numbs)}`);

//3. Take an array of strings and return the longest string.
let stringArr = ['bo','boo','b','bobobo']
 let longest = '';
function longestStr(strVar){
    for (let i=0; i< strVar.length; i++){
        if(longest.length <strVar[i].length){
            longest = strVar[i]
        }  
    }return longest
}

console.log(`The longest string in the array is: ${longestStr(stringArr)}`);

// 4. Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
let num = 2;
let arr = ['bo','boo','b','bobobo','bobo']

function longArr(arr,numb){
    let longStrings = [];
    for (let elem of arr ){
        
        if (elem.length > numb){
            longStrings.push(elem)
        }
    }
    return longStrings

}
console.log('This is the array with strings longer than the given number ['  + longArr(arr,num)+ "]");

// 5.Take a number, n, and print every number between 1 and n without using loops. Use recursion.
let n =5;
function printNr(n){
    if (n>0){
        printNr(n-1);
        console.log(n);
    }
}
console.log(printNr(n));


//  ========= Part 2: Thinking Methodically=======

let dataSet = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }];
 
///Use callback functions alongside Array methods to accomplish the following:


// 1. Sort the array by age.

// Custom compare function as a callback
//  first create a function that compares two objects by age and returns a positive number if the first object is older,
// a negative number if the second object is older, and 0 if they are the same age. This function will be used as a callback for the sorting function.

function compareByAge(a, b) {
    return (a.age) -(b.age);
}

// this is the main function that sorts the array using the compareByAge callback. the function takes an array and a callback function as arguments.
function arrSort(arr, compareCallback) {
    // Outer loop for the number of passes 
    // this loop will iterate through each object of the array
    for (let i = 0; i < arr.length; i++) {
      // Inner loop for comparison and swapping  
        for (let j = 0; j < arr.length - i - 1; j++) {
            // Call the compareCallback function to compare the two elements
            if (compareCallback(arr[j], arr[j + 1]) > 0) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
arrSort(dataSet, compareByAge);
console.log(dataSet);
//2. Filter the array to remove entries with an age greater than 50.
// use array methods and callback functions to filter the array and return only the objects with an age less than or equal to 50.

function filterByAge(arr, filterCallback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (filterCallback(arr[i])) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
// this is the helper function which will be nester inside the main function filterByAge
function filterAge(obj) {
    return obj.age <= 50;
}

let filteredArr = filterByAge(dataSet, filterAge);
console.log(filteredArr);


// 3. Map the array to change the “occupation” key to “job” and increment every age by 1.

function mapArr(arr, mapCallback) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(mapCallback(arr[i]));
    }
    return newArr;
}
// this is the helper function which will be nester inside the main function mapArr
function mapOccupation(obj) {
    obj.job = obj.occupation;
    delete obj.occupation;
    obj.age = parseInt(obj.age) + 1;
    return obj;
}
let mappedArr = mapArr(dataSet, mapOccupation);
console.log(mappedArr);


// 4. Use the reduce method to calculate the sum of the ages.
const totalAge = dataSet.reduce((accumulator, obj) => {
    return accumulator += (obj.age);
}
, 0);
console.log(totalAge);

// - use the result to calculate the average age.
const averageAge = totalAge / dataSet.length;
console.log(averageAge);


