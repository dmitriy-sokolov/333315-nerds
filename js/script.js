(function() {
  var switchers = document.querySelectorAll('.switch input[type="radio"]');
  var changeSlide = function(event) {
    var value = event.target['value'];
    var sliders = document.querySelectorAll('.slider');
    for (var i = 0; i < sliders.length; i++) {
      sliders[i].classList.remove('visible');
    }
    sliders[value - 1].classList.add('visible');
  };
  if (switchers.length > 0) {
    for (var i = 0; i < switchers.length; i++) {
      switchers[i].addEventListener('click', changeSlide);
    }
  }
  var overlay = document.querySelector('.modal-overlay');
  var from = document.querySelector('.modal-content');
  var feedback = document.querySelector('.feedback a');
  var closeBtn = document.querySelector('.modal-content-close');
  var loginField = from.querySelector('[name=name]');
  var doShow = function(event) {
    event.preventDefault();
    overlay.classList.add("visible");
    from.classList.add("show-modal");
    loginField.focus();
  };
  var doClose = function(event) {
    event.preventDefault();
    overlay.classList.remove("visible");
    from.classList.remove("show-modal");
  };
  feedback.addEventListener("click", doShow);
  closeBtn.addEventListener("click", doClose);
  overlay.addEventListener("click", doClose);
})();
