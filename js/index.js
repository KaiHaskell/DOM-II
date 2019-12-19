// Your code goes here

//Mouseover

const changeImage = document.querySelector(".funbusimg");
changeImage.addEventListener("mouseover", () => {
  changeImage.src =
    "http://3.bp.blogspot.com/_LUbspKPMw-Q/TTuM-bbFk5I/AAAAAAAADd0/UXguofW3LXQ/w1200-h630-p-k-no-nu/Go+To+Hell+Bus.jpg";
});

changeImage.addEventListener("mouseleave", () => {
  changeImage.src = "img/fun-bus.jpg";
});

//Keydown
const keyDown = document.querySelector("body");
keyDown.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  keyDown.style.backgroundImage =
    "url('https://i.pinimg.com/originals/d5/7f/6c/d57f6c94052671e101225fa560ffc532.jpg')";
  document.querySelector("header").style.backgroundColor = "darkorange";
});

keyDown.addEventListener("keyup", event => {
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  keyDown.style.backgroundColor = "white";
});

//scroll

const scrollText = document.querySelector(".img-content");
scrollText.addEventListener("scroll", () => {
  scrollText.style.transform = "scale(1.2)";
  scrollText.style.transition = "all 0.5s";
});

//rotate
const flipOut = document.querySelector("h1");
window.addEventListener("scroll", () => {
  flipOut.style.transform = "rotateY(360deg)";
  flipOut.style.transition = "all 1s ease-in-out";
});

//onclick

window.addEventListener("click", () => {
  document.querySelector("h1").textContent = "Hell Bus";
  document.querySelector(".intro h2").textContent = "Welcome to Hell Bus!";
  document.querySelector(".intro p").textContent =
    "See you in hell, bitch. (Double click on the header)";
});

//resize
document.querySelectorAll(".intro").forEach(element => {
  window.addEventListener("resize", event => {
    element.style.color = "white";
    event.stopPropagation();
  });
});

document.querySelectorAll(".text-content").forEach(element => {
  window.addEventListener("resize", event => {
    element.style.color = "white";
    event.stopPropagation();
  });
});

document.querySelectorAll(".content-destination").forEach(element => {
  window.addEventListener("resize", event => {
    element.style.color = "white";
    event.stopPropagation();
  });
});

//load
window.addEventListener("load", () => {
  window.confirm("This site is for 18 and up.");
});

//dblclick on the header for hell bus
let dblClick = document.querySelector(".main-navigation");

dblClick.addEventListener("dblclick", () => {
  let hellbusjam = new Audio("mp3/hellbus.mp3");
  hellbusjam.loop = false;
  hellbusjam.volume = 0.5;
  hellbusjam.play();
});

//wheel
const wheelScroll = document.querySelector(".content-destination img");

window.addEventListener("wheel", () => {
  wheelScroll.src =
    "https://yt3.ggpht.com/a/AGF-l79EouqcHjO7eKnoRWsqEJ4Xs8KjrsV36HpBWQ=s900-c-k-c0xffffffff-no-rj-mo";
});
