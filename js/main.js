const btnDarkMode = document.querySelector('.dark-mode-btn');
btnDarkMode.addEventListener('click', ()=>{
  if (!btnDarkMode.classList.contains('dark-mode-btn--active')){
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
  } else{
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
  } 
})
