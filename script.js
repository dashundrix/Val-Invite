document.addEventListener("DOMContentLoaded", function () {

  const noButton = document.querySelector(".button_no");

  // Make it float over whole screen
  noButton.style.position = "fixed";

  function moveButton() {
    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxX = window.innerWidth - buttonWidth;
    const maxY = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noButton.style.position = "fixed";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
   }

    // Desktop dodge
    noButton.addEventListener("mouseenter", moveButton);

    // Mobile / Tablet dodge
    noButton.addEventListener("touchstart", function (e) {
        e.preventDefault();
        moveButton();
    }, { passive: false });

    const backgroundMusic = document.getElementById("backgroundMusic");

    function startMusic() {
    backgroundMusic.play().catch(err => {
        console.log("Autoplay blocked:", err);
    });

    // Remove listener after first interaction
    document.removeEventListener("click", startMusic);
    document.removeEventListener("touchstart", startMusic);
    }

    document.addEventListener("click", startMusic);
    document.addEventListener("touchstart", startMusic);
});