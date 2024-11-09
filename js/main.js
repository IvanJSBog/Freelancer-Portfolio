const btnDarkMode = document.querySelector('.dark-mode-btn');

//проверка темной темы на уровне системных настроек
if (window.matchMedia("(prefers-color-scheme: dark").matches) {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
}

// проверка темной темы в localstorage
if (localStorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
} else{
  btnDarkMode.classList.remove('dark-mode-btn--active');
  document.body.classList.remove('dark');
}

// Если меняются системные настройки или настройки темы браузера, меняется тема
window.matchMedia("(prefers-color-scheme: dark").addEventListener('change', (event)=>{
  if (event.matches){
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'dark');
  }else{
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', 'light');
  }
})

// Включение темной темы по кнопке
btnDarkMode.addEventListener('click', ()=>{
  if (!btnDarkMode.classList.contains('dark-mode-btn--active')){
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'dark');
  } else{
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', 'light');
  } 
})
