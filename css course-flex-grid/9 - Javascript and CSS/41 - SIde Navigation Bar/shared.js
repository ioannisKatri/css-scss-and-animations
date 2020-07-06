//This variable should hold a reference to the html element
//it will give us access to the parsed document.


const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
//we use a CSS combinator Selector
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav')



for(let i=0; i<selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener("click", displayBlockModalBackdrop);
}

// it is called nameFunction
function displayBlockModalBackdrop(){
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}

function closeModal(){
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}


backdrop.addEventListener('click', function () {
    mobileNav.style.display='none';
    closeModal();
});
modalNoButton.addEventListener('click',closeModal);

toggleButton.addEventListener('click',function () {
    mobileNav.style.display='block';
    backdrop.style.display='block';
});