// function greeting(number) {
//     alert('Your number: ' + number);
// }

// function processUserInput(callback) {
//     let number = prompt('Please enter your number');
//     callback(number);
// }

// processUserInput(greeting);






// function get(callback) {
//     let a = 5;

//     callback(a);
// }

// function greeting(a) {
//     alert('Your number: ' + a);
// }
// setTimeout(get, 1000);
// greeting(get);
// console.log(a)


// function first() {
//     setTimeout(function() { console.log("First"); }, 1000);
// }

// function second() {
//     console.log("Second");
// }

// first();
// second();



let a;
let p = document.querySelector('.number');

function plus() {
    setTimeout("console.log(a)", 1000);

    setTimeout("p.innerHTML = a;", 2000);
}

function getInput(callback) {
    a = prompt('Please enter your number');
    callback(a);
}
getInput(plus);



// var allUserData = [];

// // определение функции logStuff для вывода в консоль
// function logStuff(userData) {
//     if (typeof userData === 'string') {
//         console.log(userData);
//     } else if (typeof userData === 'object') {
//         for (var item in userData) {
//             console.log(item + ': ' + userData[item]);
//         }
//     }
// }

// // Функция, принимающая два параметра, одним из которых является коллбэк 
// function getInput(options, callback) {
//     allUserData.push(options);
//     callback(options);
// }

// // Пример вызова функции getInput с коллбком
// getInput({ name: 'Rich', speciality: 'JavaScript' }, logStuff);