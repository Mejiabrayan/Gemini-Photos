// Async Code Example

// console.log('start');

// setTimeout(() => {
    // console.log("We are in the timeout");
    // }, 10000);
    
// console.log('End');


// function loginUser(email, password, callback) {
//     setTimeout(() => {
//     console.log("Now we have the data")
//     callback({ userEmail: email });
//     }, 5000);
// }

// const user = loginUser('learnwithbrayan@gmail.com',12345, user => {
//     console.log(user);
// } )

// console.log("Finish");

// function userInfo(name,address,callback) {
//     setTimeout(() => {
//         console.log('We have recieved the data')
//         callback({userAddress: address});
//     }, 10000);
// }
// const user = userInfo('1234 ave', 1234, user => {
//     console.log(user);
// })

// Callbacks is a function passed into another function as an argument to be executed later//

// let numbers = [1, 2, 3, 4, 5, 6];

// function isOddNumber(number) {
//     return number % 2;
// }
// const oddNumbers = numbers.filter(isOddNumber);
// console.log(oddNumbers);

// let numbers = [1, 2, 3, 4, 5, 6];

// function isOddNumber(number){
//     return number % 2;
// }
// const oddNumber = numbers.filter(isOddNumber);
// console.log(oddNumber);



let numbers = [1,2,3,4,5,6,7,8,9,10,11];

// function theOddNumbers(numbers){
//     return numbers % 2;
// }
let oddNumbers = numbers.filter(numbers => numbers);
console.log(oddNumbers)

// the is a callback function //
// function theOddNumbers(numbers){
//     return numbers % 2;
// }

// const theNumbers = numbers.filter(theOddNumbers);
// console.log(theNumbers);

// the anonymous function as a callback
// let oddnumbers = numbers.filter(function(numbers){
//     return numbers % 2;
// });

// Now in ES6, you can use the arrow function
// let oddNumbers = numbers.filter(number => number % 2)
// console.log(oddNumbers);

