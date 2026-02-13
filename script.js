document.addEventListener("DOMContentLoaded", function () {

  const noButton = document.querySelector(".button_no");
    noButton.addEventListener("click", function () {
    handleButtonClick("no");
  });

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

    function handleButtonClick(buttonType) {
    if (buttonType === "yes") {
      const heading = document.querySelector(".curved-heading");
      heading.innerText = "You're my Valentine!! Lets get married :)";


      const image = document.querySelector("img");
      image.src = "Assets/Wedding.gif";

      const cheerSound = document.getElementById("cheerMusic");
      cheerSound.play().catch(err => {
        console.log("Autoplay blocked:", err);
      });

      const fireworksContainer = document.getElementById("fireworksContainer");
      fireworksContainer.style.opacity = 1;
      setTimeout(function () {
        fireworksContainer.style.opacity = 0;
      }, 100000);
      
    } else if (buttonType === "no") {
      const heading = document.querySelector(".curved-heading");
      heading.innerText = "Would you like to try again??";


      const image = document.querySelector("img");
      image.src = "Assets/Please Cat.gif";

      const booSound = document.getElementById("booMusic");
      booSound.play().catch(err => {
        console.log("Autoplay blocked:", err);
      });
    }
  }

  // Add event listener to the Yes button
  const yesButton = document.querySelector(".button_yes");
  yesButton.addEventListener("click", function () {
    handleButtonClick("yes");
  });

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

    function lessenBGM() {
    const newVolume = backgroundMusic.volume - 0.9; 
    backgroundMusic.volume = newVolume;
    }

    lessenBGM();
});