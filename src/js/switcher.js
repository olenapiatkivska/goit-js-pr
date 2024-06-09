const switcherInputElem = document.querySelector('.switcher-toggle');

switcherInputElem.addEventListener('change', event => {
  if (!event.target.checked) {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    localStorage.setItem('theme', 'dark');
  }
});

if (localStorage.getItem('theme') === 'dark') {
  switcherInputElem.checked = true;
  document.body.classList.add('dark');
  document.body.classList.remove('light');
}
