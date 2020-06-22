var openPopup = document.querySelector(".write-us-button");
var popupSection = document.querySelector(".popup");
var closePopup = popupSection.querySelector(".close-button");
var popupForm = popupSection.querySelector(".popup-form");
var userName = popupSection.querySelector(".popup-name");
var userEmail = popupSection.querySelector(".popup-email");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

openPopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSection.classList.add("popup-show");
    if (storage) {
        userName.value = storage;
        userEmail.focus();
    } else {
        userName.focus();
    }
});

closePopup.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupSection.classList.remove("popup-show");
    popupSection.classList.remove("popup-error");
});

popupForm.addEventListener("submit", function (evt) {
    if (!userName.value || !userEmail.value) {
        evt.preventDefault();
        popupSection.classList.remove("popup-error");
        popupSection.offsetWidth = popupSection.offsetWidth;
        popupSection.classList.add("popup-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", userName.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popupSection.classList.contains("popup-show")) {
            evt.preventDefault();
            popupSection.classList.remove("popup-show");
            popupSection.classList.remove("popup-error");
        }
    }
});
