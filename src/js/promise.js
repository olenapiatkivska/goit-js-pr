// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//   return "hello world";
// }

// const promise = new Promise(resolve => {
//   setTimeout(() => resolve('Hello world'), 2000);
// });
// promise.then(response => console.log(response));

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і повертатиме проміс.
// Додай перевірку:
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// const promptValue = prompt('Enter value:');

// function checkValue(promptValue) {
//   const value = Number(promptValue);
//   return new Promise((resolve, reject) => {
//     if (Number.isNaN(value)) {
//       reject('error');
//     }
//     if (value % 2 === 0) {
//       setTimeout(() => resolve('even'), 1000);
//     }
//     if (value % 2 !== 0) {
//       setTimeout(() => resolve('odd'), 2000);
//     }
//   });
// }

// checkValue(promptValue)
//   .then(result => console.log(result))
//   .catch(err => console.log(err));

// Додай відображення дати і часу в реальному часі
// <p class="date">Current data and time: <span></span></p>

const dateSpan = document.querySelector('.date span');

dateSpan.textContent = new Date().toLocaleString('uk');
setInterval(
  () => (dateSpan.textContent = new Date().toLocaleString('uk')),
  1000
);
