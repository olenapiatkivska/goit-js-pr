// ЗАДАЧА 1
// Якщо імейл і пароль користувача збігаються, зберігай дані з форми при сабміті
// у локальне сховище і змінюй кнопку Login на Logout і роби поля введення
// недоступними для змін.
// При перезавантаженні сторінки, якщо користувач залогінений, ми маємо бачити Logout-кнопку
// та недоступні для зміни поля з даними користувача.
// Клік по кнопці Logout повертає все до початкового вигляду і видаляє дані користувача
// З локального сховища.
// Якщо введені дані не збігаються з потрібними даними, викликати аlert і
// повідомляти про помилку.

import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import icon from './img/javascript.svg';

const USER_DATA = {
  email: 'user@mail.com',
  password: 'secret',
};

const LS_KEY = 'login-data';

const loginForm = document.querySelector('.login-form');
const loginBtn = document.querySelector('.login-btn');
const emailInput = document.querySelector('[name="email"]');
const passwordInput = document.querySelector('[name="password"]');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const { email, password } = event.target.elements;
  console.log(email);
  const emailValue = email.value.trim();
  const passwordlValue = password.value.trim();
  if (loginBtn.textContent === 'Logout') {
    localStorage.removeItem(LS_KEY);
    loginForm.reset();
    email.removeAttribute('readonly');
    password.removeAttribute('readonly');
    loginBtn.textContent = 'Login';
    return;
  }
  if (emailValue === '' || passwordlValue === '') {
    iziToast.warning({
      title: 'Caution',
      message: 'You forgot important data',
      iconUrl: icon,
    });
    return;
  }
  if (emailValue !== USER_DATA.email || passwordlValue !== USER_DATA.password) {
    iziToast.error({
      title: 'Error',
      message: 'Uncorrect data',
      iconUrl: icon,
    });
    return;
  }
  iziToast.success({
    title: 'Success',
    message: 'Welcome',
    iconUrl: icon,
  });
  localStorage.setItem(
    LS_KEY,
    JSON.stringify({ email: emailValue, password: passwordlValue })
  );
  loginBtn.textContent = 'Logout';
  email.setAttribute('readonly', true);
  password.setAttribute('readonly', true);
});

const savedData = localStorage.getItem(LS_KEY);
if (savedData) {
  const parsedData = JSON.parse(savedData);
  emailInput.value = parsedData.email || '';
  passwordInput.value = parsedData.password || '';
  loginBtn.textContent = 'Logout';
  emailInput.setAttribute('readonly', true);
  passwordInput.setAttribute('readonly', true);
}
