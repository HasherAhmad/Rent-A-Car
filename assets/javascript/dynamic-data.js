// Car Cards dynamic data js
document.querySelectorAll(".car-box").forEach((box) => {
  box.addEventListener("click", () => {
    const carData = {
      name: box.dataset.name,
      meta: box.dataset.meta,
      price: box.dataset.price,
      specs: JSON.parse(box.dataset.specs),
      overview: box.dataset.overview,
      features: JSON.parse(box.dataset.features),
      images: JSON.parse(box.dataset.images),
    };

    localStorage.setItem("selectedCar", JSON.stringify(carData));

    window.location.href = "detail.html";
  });
});
