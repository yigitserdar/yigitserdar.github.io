var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;


function myFunction() {
  if (pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}