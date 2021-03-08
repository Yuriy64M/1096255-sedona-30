

const  searchHotelButton = document.querySelector(".search-hotel");
const  modalWindow = document.querySelector(".modal");
//const  modalAnimation = document.querySelector(".animation-modal");
//const  madalAnimationTwo = document.querySelector(".animation-modal-two");
const  form = modalWindow.querySelector("form");
const  arrivalDate = modalWindow.querySelector("[name=Arrival_date]");
const  dateOfDeparture = modalWindow.querySelector("[name=Date_of_departure]");

searchHotelButton.addEventListener ("click", function () {

modalWindow.classList.toggle ("animation-modal-two");
modalWindow.classList.toggle ("search-hotel-clicked");

});

form.addEventListener ("submit", function (evt) {

if (!arrivalDate.value || !dateOfDeparture.value) {
  evt.preventDefault();
}

});
