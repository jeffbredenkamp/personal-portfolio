document.body.onload = function(){
    setTimeout(function() {
      var preloader = document.getElementById('loader');
      var loaded = document.getElementById('hero');
      var body = document.getElementById('wrap');

      if( !preloader.classList.contains('done') )
      {
        body.removeAttribute('style');
        preloader.classList.add('done');
        loaded.classList.add('active');
      }
    }, 1000)
  }
  
  const toggleBtn = document.getElementById("toggle-btn");
  const theme = document.getElementById("theme");
  let darkMode = localStorage.getItem("dark-mode");
  
  const enableDarkMode = () => {
    theme.classList.add("dark-mode");
    toggleBtn.classList.remove("dark-mode-toggle");
    localStorage.setItem("dark-mode", "enabled");
    toggleBtn.classList.add("dark-active");
  };
  
  const disableDarkMode = () => {
    theme.classList.remove("dark-mode");
    toggleBtn.classList.add("dark-mode-toggle");
    localStorage.setItem("dark-mode", "disabled");
    toggleBtn.classList.remove("dark-active");
  };
  
  if (darkMode === "enabled") {
    enableDarkMode(); // set state of darkMode on page load
  }
  
  toggleBtn.addEventListener("click", (e) => {
    darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
    if (darkMode === "disabled") {
      enableDarkMode();
      toggleBtn.classList.add("dark-active");
    } else {
      disableDarkMode();
      toggleBtn.classList.remove("dark-active");
    }
  });
