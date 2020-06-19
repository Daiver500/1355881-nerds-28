let openPopup = document.querySelector(".write-us-button");
let popupForm = document.querySelector(".popup");
let closePopup = document.querySelector(".close-button");

openPopup.onclick = function (evt) {
    evt.preventDefault();
    popupForm.classList.add("popup-show");
};

closePopup.onclick = function (evt) {
    evt.preventDefault(); 
    popupForm.classList.remove("popup-show");
};