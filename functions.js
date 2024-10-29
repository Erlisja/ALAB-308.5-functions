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

