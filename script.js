<script>
  var slideIndex = 1;
  showSlide(slideIndex);

  function nextSlide() {
    showSlide(slideIndex += 1);
  }

  function prevSlide() {
    showSlide(slideIndex -= 1);
  }

  function showSlide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active-slide");
    }
    slides[slideIndex - 1].classList.add("active-slide");
  }

  // Allow navigation using arrow keys
  document.addEventListener('keydown', function(event) {
    if (event.key === "ArrowLeft") {
      prevSlide();
    } else if (event.key === "ArrowRight") {
      nextSlide();
    }
  });
</script>
