const popup =
  "Your message has been sent to the Royal Kingdom. Thanks for contacting us.";

document.getElementById("contactform").addEventListener("submit", function (event) {
  event.preventDefault();
  alert(popup);
});
