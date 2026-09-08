// Detail page Swiper js
new Swiper(".detail-swiper", {
  effect: "cube",
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// Detail page js
document.addEventListener("DOMContentLoaded", () => {
  const carData = localStorage.getItem("selectedCar");

  if (!carData) {
    console.log("No car data found!");
    return;
  }

  const car = JSON.parse(carData);

  // Populate Detail Page
  document.getElementById("detailName").textContent = car.name;
  document.getElementById("detailMeta").textContent = car.meta;
  document.getElementById("detailPrice").textContent = car.price;
  document.getElementById("detailOverview").textContent = car.overview;

  // Specs
  const specsContainer = document.getElementById("detailSpecs");
  specsContainer.innerHTML = "";
  car.specs.forEach((s) => {
    const div = document.createElement("div");
    div.classList.add("spec");
    div.textContent = s;
    specsContainer.appendChild(div);
  });

  // Features
  const featuresContainer = document.getElementById("detailFeatures");
  featuresContainer.innerHTML = "";
  car.features.forEach((f) => {
    const div = document.createElement("div");
    div.classList.add("feature");
    div.textContent = f;
    featuresContainer.appendChild(div);
  });

  // Images for Swiper
  const imagesContainer = document.getElementById("detailImages");
  imagesContainer.innerHTML = "";
  car.images.forEach((img) => {
    const slide = document.createElement("div");
    slide.classList.add("swiper-slide");
    const imageEl = document.createElement("img");
    imageEl.src = img;
    imageEl.alt = car.name;
    slide.appendChild(imageEl);
    imagesContainer.appendChild(slide);
  });
});
