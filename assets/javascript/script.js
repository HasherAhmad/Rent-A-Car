// Header JS
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    if(nav.classList.contains('active')){
        setTimeout(() => {
            toggle.classList.remove('fa-bars');
            toggle.classList.add('fa-xmark');
        }, 300);
    } else {
        toggle.classList.remove('fa-xmark');
        toggle.classList.add('fa-bars');
    }
});

// swiper js
const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  spaceBetween: 24,
  slidesPerView: 4,

  breakpoints: {
    992: {  
      slidesPerView: 4
    },
    768: {   
      slidesPerView: 3
    },
    500: {  
      slidesPerView: 2
    },
    0: {    
      slidesPerView: 1
    }
  }
});

// form js
const form = document.getElementById('rentForm');
const today = new Date().toISOString().split("T")[0];

document.getElementById("pickUpDate").setAttribute("min", today);
document.getElementById("dropOffDate").setAttribute("min", today);

form.addEventListener('submit', function(e){
  e.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const car = document.getElementById("carType").value;
  const pickUp = document.getElementById("pickUpDate").value;
  const dropOff = document.getElementById("dropOffDate").value;
  const location = document.getElementById("pickUpLocation").value.trim();

  if(!name || !phone || !car || !pickUp || !dropOff || !location){
    alert("Please fill all required fields before submitting.");
    return;
  }
  if(new Date(pickUp) < new Date(today) || new Date(dropOff) < new Date(today)){
    alert("Past dates are not allowed.");
    return;
  }

  if(new Date(dropOff) < new Date(pickUp)){
    alert("Drop-off date cannot be earlier than pick-up date.");
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
});

// Search car filter
const searchInput = document.getElementById("carSearch");
const carsGrid = document.getElementById("carsGrid");
const carCards = Array.from(carsGrid.querySelectorAll(".car-card"));

function cleanInput() {
  searchInput.value = searchInput.value.replace(/\s+/g, " ").trimStart();
}

function filterCars() {
  cleanInput(); 

  let value = searchInput.value.toLowerCase().trim();

  if (value.length < 3) {
    carCards.forEach(card => (card.style.display = "block"));
    return;
  }

  carCards.forEach(card => {
    const name = card.querySelector(".car-name").textContent.toLowerCase();
    card.style.display = name.includes(value) ? "block" : "none";
  });
}

searchInput.addEventListener("input", filterCars);
