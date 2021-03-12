const  searchHotelButton = document.querySelector(".search-hotel");
const  modalWindow = document.querySelector(".modal");
const  searchHotelClicked = document.querySelector(".search-hotel-clicked");

searchHotelButton.addEventListener ("click", function () {

    modalWindow.classList.toggle ("animation-modal-two");

    modalWindow.classList.toggle ("search-hotel-clicked");

});
