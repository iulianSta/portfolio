// Footer, span / Year auto update
let year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;

// Hamburger Menu functions
let clicked = false;
document.querySelector(".x-menu").addEventListener("click", () => {
  clicked = !clicked;
  console.log(clicked);
  if (clicked) {
    document.querySelector(".menu").style.cssText =
      "display: block; position: absolute;top: 6rem;left:3rem;z-index: 1;";
    document.querySelector(".x-top").style.cssText =
      "transform: rotate(0.15turn); position: absolute;";
    document.querySelector(".x-center").style.cssText = "display: none;";
    document.querySelector(".x-bottom").style.cssText =
      "transform: rotate(-0.15turn);";
    document.querySelector(".home-header").style.cssText =
      "height: 100vh; background: black; padding-top: 2rem; transition: 3s;";
  } else {
    document.querySelector(".menu").style.cssText = "display: none;";
    document.querySelector(".x-top").style.cssText = "display: initial;";
    document.querySelector(".x-center").style.cssText = "display: initial;";
    document.querySelector(".x-bottom").style.cssText = "display: initial;";
    document.querySelector(".home-header").style.cssText =
      "height: auto; transition: 5s;";
  }
});
