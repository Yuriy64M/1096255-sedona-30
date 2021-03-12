

const  searchHotelButton = document.querySelector(".search-hotel");
const  modalWindow = document.querySelector(".modal");
const  animationModalTwo = document.querySelector(".animation-modal-two");
const  searchHotelOpen = document.querySelector(".search-hotel-open");
const  searchHotelClicked = document.querySelector(".search-hotel-clicked");

searchHotelButton.addEventListener ("click", function () {


  if (searchHotelClicked) {
    modalWindow.classList.remove ("search-hotel-clicked");
    modalWindow.classList.toggle ("animation-modal-two");
    console.log("ffffffff");
  } else

  if (animationModalTwo || searchHotelOpen) {
    modalWindow.classList.remove ("animation-modal-two");
    modalWindow.classList.remove ("search-hotel-open");
    modalWindow.classList.toggle ("search-hotel-clicked");
    console.log("ooooooooooo");
  }
});
