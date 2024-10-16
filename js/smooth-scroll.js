function smoothScroll(event) {
  event.preventDefault();

  var target = document.querySelector(event.target.getAttribute("href"));

  if (target) {
    var offset = target.getBoundingClientRect().top + window.scrollY;
    var offsetAdjustment = 75;

    window.scrollTo({
      top: offset - offsetAdjustment,
      behavior: "smooth",
    });
  }
}
