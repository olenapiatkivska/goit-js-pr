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

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const { email, password } = event.target.elements;
  console.log(email);
  const emailValue = email.value.trim();
  const passwordlValue = password.value.trim();
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

  localStorage.setItem(
    LS_KEY,
    JSON.stringify({ email: emailValue, password: passwordlValue })
  );
  loginBtn.textContent = 'Logout';
  email.setAttribute('readonly', true);
  password.setAttribute('readonly', true);
});
