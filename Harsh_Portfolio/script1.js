// Get the button element
const button1 = document.querySelector(".img-button1");

// Get the image element
const image2 = document.querySelector(".img2");

// Add event listener to the button for mouseover event
button1.addEventListener("mouseover", () => {
  // Add blur-effect class to the image
  image2.classList.add("blur-effect");
});

// Add event listener to the button for mouseout event
button1.addEventListener("mouseout", () => {
  // Remove blur-effect class from the image
  image2.classList.remove("blur-effect");
});
