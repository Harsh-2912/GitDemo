// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    alert("Button clicked!");
  });
});
