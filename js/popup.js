let openPopup = document.querySelector(".write-us-button");
let popupForm = document.querySelector(".popup");
let closePopup = document.querySelector(".close-button");

/*openPopup.addEventListener("click", function () {
    evt.preventDefault(); 
    popupForm.classList.add(".popup-show");
});

closePopup.addEventListener("click", function () {
    evt.preventDefault(); 
    popupForm.classList.remove(".popup-show");
});*/

openPopup.onclick = function () {
    /*evt.preventDefault();*/
    popupForm.classList.add(".popup-show");
};

closePopup.onclick = function () {
    /*evt.preventDefault(); */
    popupForm.classList.remove(".popup-show");
};