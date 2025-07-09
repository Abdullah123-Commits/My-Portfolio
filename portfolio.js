document.addEventListener('DOMContentLoaded', () => {
  let setThemeBtn = document.querySelector('.theme-switch');

  //ADDING EVENT LISTERNER
  setThemeBtn.addEventListener('click', function () {
    if (setThemeBtn.value ==='TryDark') {
        document.body.classList.toggle('dark-theme');
        setThemeBtn.value = 'TryLight';
    }
    else {
        document.body.classList.remove('dark-theme');
        setThemeBtn.value = 'TryDark';
    }
  });
  //ADDING BACK TO TOP FUNCTIONALITY
  let backToTopBtn = document.getElementById('backToTopBtn');

  backToTopBtn.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for a nice animation
    });
  });
});

