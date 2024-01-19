// Create an Intersection Observer to handle elements entering or exiting the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Check if the element is currently intersecting with the viewport
    if (entry.isIntersecting) {
      // If intersecting, add the 'showVertical' class for a smooth appearance
      entry.target.classList.add("showVertical");
    } else {
      // If not intersecting, remove the 'showVertical' class
      entry.target.classList.remove("showVertical");
    }
  });
});

// Observe elements with 'hiddenLeft' class for leftward animation
document.querySelectorAll(".hiddenLeft").forEach((el) => observer.observe(el));

// Observe elements with 'hiddenRight' class for rightward animation
document.querySelectorAll(".hiddenRight").forEach((el) => observer.observe(el));

// Observe the element with 'closing' class for closing animation
observer.observe(document.querySelector(".closing"));

document.addEventListener("DOMContentLoaded", function () {
  // Add an event listener to the scroll-up button
  document
    .getElementById("scrollUpButton")
    .addEventListener("click", function () {
      // Get the main title element
      const mainTitle = document.querySelector(".maintitle");

      // Scroll to the main title element
      mainTitle.scrollIntoView({
        behavior: "smooth",
      });
    });
});

// Function to handle scroll-up button click
function handleScrollUpButtonClick() {
  // Get the main title element
  const mainTitle = document.querySelector(".maintitle");

  // Scroll to the main title element
  mainTitle.scrollIntoView({
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Add an event listener to the scroll-up button using the function
  document
    .getElementById("scrollUpButton")
    .addEventListener("click", handleScrollUpButtonClick);

  // Set current year dynamically
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});
