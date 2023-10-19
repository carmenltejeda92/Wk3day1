/*  Author: C. Tejeda
    Date: 10.18.2023
    Purpose: Defining and coding 5 functions*/




/* Define a function, as a function declaration, 'isCharAVowel' that takes a character as an argument and returns true if it is
     a vowel, false otherwise. */

// let vowels = ['a', 'e', 'i', 'o', 'u']

// function isCharAVowel(alphabet){
//         if(vowels.includes(alphabet)){
//             console.log('true')
//         }else{
//             console.log('false')
//         }
// }

// isCharAVowel('d')


/* Define a function, as a function expression, 'sumArray' that takes an array of numbers and returns the sum of those numbers. 
     For example, 'multiplyArray([2, 4, 5]); would return 40 */

// let nums = [1, 2, 3, 4, 9, 2, 10, 4]
// let sum = 0

// const sumArray = function(){
//     for(let i = 0; i < nums.length; i++){
//         sum += nums[i];
//     }
//     return sum
// }

// console.log(sumArray())


/* Define a function, as a function declaration, 'reverseString' that takes a string, reverses the characters and returns it. 
     For example, 'reverseString('rockstar'); would return the string 'ratskcor' */

// function reverseString(word){
//     let reversed = ''
//     for(let i = word.length -1; i >=0; i-- ){
//         reversed += word[i]
//     }
//     return reversed
// }

// console.log(reverseString('Apple'))


/* Define a function, as a function expression, 'longestStringInArray' that takes an array of strings as an argument and returns
     the length of the longest string. */

// let words = ['apple', 'orange', 'banana', 'pineapple']
// const longestStringInArray = function(longestArr){
//     let longest = longestArr[0]         
//     for(let i = 0; i < longestArr.length; i++){
//         if(longestArr[i] > longest){
//             longest = longestArr[i]
//         }
//     }
//     return longest
//     }

// console.log(longestStringInArray(words))
  
     
 
/* Define a function, as a function expression, 'maxOfThree' that takes three numbers as arguments and returns the largest of them. 
     Again, the Math.max method is not allowed */

// const maxOfThree = function(a, b, c){
//     if(a > b && a > c){
//         console.log(a + ' is the largest number')
//     }else if (b > a && b > c){
//         console.log(b + ' is the largest number')
//     }else if (c > a && c > b){
//         console.log(c + ' is the largest number')
//     }
// }

// maxOfThree(20, 40.5, 2)

    







