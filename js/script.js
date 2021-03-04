

const  searchHotelButton = document.querySelector(".search-hotel");
const  modalWindow = document.querySelector(".modal");

searchHotelButton.addEventListener ("click", function () {

modalWindow.classList.toggle ("search-hotel-clicked");
console.log ("клик");
});
