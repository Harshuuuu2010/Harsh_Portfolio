// Get the button element
const button = document.querySelector(".img-button");

// Get the image element
const image = document.querySelector(".img1");

// Add event listener to the button for mouseover event
button.addEventListener("mouseover", () => {
  // Add blur-effect class to the image
  image.classList.add("blur-effect");
});

// Add event listener to the button for mouseout event
button.addEventListener("mouseout", () => {
  // Remove blur-effect class from the image
  image.classList.remove("blur-effect");
});
