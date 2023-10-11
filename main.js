const image = document.getElementById("image");
const burger = document.getElementById("burger");
const left = document.getElementsByClassName("left");
const right = document.getElementsByClassName("right");
const menuBars = document.getElementById("bars");
const products = document.querySelector(".product-cards");
const toggleMenu = document.getElementById("toggle-menu");

// --------- Toggle Menu --------------
menuBars.addEventListener("click", () => {
  if (burger.classList.contains("fa-bars")) {
    burger.classList.remove("fa-bars");
    burger.classList.add("fa-xmark");
    toggleMenu.style.display = "block";
  }else{
    burger.classList.remove("fa-xmark");
    burger.classList.add("fa-bars");
    toggleMenu.style.display = "none";
  }
});

// toggleMenu.addEventListener('')

// --------- Image Slider --------------
const slideImage = [
  "./assets/banner/banner1.png",
  "./assets/banner/banner2.png",
  "./assets/banner/banner3.jpg",
  "./assets/banner/banner4.jpg",
  "./assets/banner/banner5.png",
  "./assets/banner/banner6.png",
  "./assets/banner/banner7.jpg",
  "./assets/banner/banner8.jpg",
];

let count = 0;
image.src = slideImage[count];

function autoImageSlider() {
  setInterval(() => {
    count++;

    if (document.images) {
      if (count == slideImage.length) {
        count = 0;
      }
      image.src = slideImage[count];
    }
  }, 3000);
}
autoImageSlider();

function manualImageSlider(button) {
  if (button == "previous") {
    count--;
  }

  if (button == "next") {
    count++;
  }

  if (count > slideImage.length - 1) {
    count = 0;
  }

  if (count < 0) {
    count = slideImage.length - 1;
  }
  image.src = slideImage[count];
}
// --------- End of Image Slider --------------

// ------------ Product Slider ------------
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
function productsSlider(button) {
  if (button == "left") {
    products.style.transform = `translateX(0)`;
    rightBtn.classList.remove("disable");
    leftBtn.classList.add("disable");
  }
  if (button == "right") {
    products.style.transform = `translateX(-900px)`;
    rightBtn.classList.add("disable");
    leftBtn.classList.remove("disable");
  }
}

// ------------ End of Product Slider ------------
