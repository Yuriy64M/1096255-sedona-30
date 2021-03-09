

const  searchHotelButton = document.querySelector(".search-hotel");
const  modalWindow = document.querySelector(".modal");

searchHotelButton.addEventListener ("click", function () {

modalWindow.classList.toggle ("animation-modal-two");
modalWindow.classList.toggle ("search-hotel-clicked");

});
