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