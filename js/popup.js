let openPopup = document.querySelector(".write-us-button");
let popupSection = document.querySelector(".popup");
let closePopup = document.querySelector(".close-button");
let popupForm = document.querySelector(".popup-form");
let userName = document.querySelector(".popup-name");
let userEmail = document.querySelector(".popup-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

openPopup.onclick = function (evt) {
    evt.preventDefault();
    popupSection.classList.add("popup-show");
    if (storage) {
        userName.value = storage;
        userEmail.focus();
  } else {
      userName.focus();}
};

closePopup.onclick = function (evt) {
    evt.preventDefault(); 
    popupSection.classList.remove("popup-show");
    popupSection.classList.remove("popup-error");
};

popupForm.onsubmit = function (evt) {
    if (!userName.value || !userEmail.value) {
    evt.preventDefault();
    userName.classList.remove("popup-error");
    userEmail.classList.remove("popup-error");
    popupSection.offsetWidth = popupSection.offsetWidth;
    userName.classList.add("popup-error");
    userEmail.classList.add("popup-error");
  } else {
    if (isStorageSupport) {
    localStorage.setItem("login", userName.value);
    }
  }
};

window.onkeydown = function (evt) {
    if (evt.keyCode === 27) {
      if (popupSection.classList.contains("popup-show")) {
        evt.preventDefault();
        popupSection.classList.remove("popup-show");
        popupSection.classList.remove("popup-error");
      }
    }
  };