var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var cTaButton = document.querySelector(".main-nav__item-cta");
// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        // modal.className = 'open'; // This will actually overwrite the complete class list
        backdrop.style.display = "block";
        modal.classList.add("open");
        setTimeout(function (){
            backdrop.classList.add("open");
        }, 10);
    });
}

backdrop.addEventListener("click", function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove("open");
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
    //   backdrop.style.display = "none";
    //   modal.style.display = "none";
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");

    setTimeout(function (){
        backdrop.style.display = "none";

    }, 10);
}

toggleButton.addEventListener("click", function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function (){
        backdrop.classList.add("open");
    }, 10);
});

cTaButton.addEventListener('animationstart', function (event) {
   console.log("animation started", event);
});

cTaButton.addEventListener('animationend', function (event) {
    console.log("animation ended", event);
});

cTaButton.addEventListener('animationiteration', function (event) {
    console.log("animation iteration", event);
});