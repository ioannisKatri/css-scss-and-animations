//This variable should hold a reference to the html element
//it will give us access to the parsed document.


//QuerySelector will select tonly one element, the first element.
const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
//we use a CSS combinator Selector
const selectPlanButtons = document.querySelectorAll('.plan button');
const modalNoButton = document.querySelector('.modal__action--negative');

//selects all elements within an array
// var backdrop = document.querySelectorAll('.backdrop');

//we see it as an object with .dir
// console.dir(backdrop);
// console.log(backdrop);

//manipulates the INLINE styles of the element
// backdrop.style.display = 'block';


for(let i=0; i<selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener("click", displayBlockModalBackdrop);
}


function displayBlockModalBackdrop(){
    modal.style.display = 'block';
    backdrop.style.display = 'block';
}

// it is called nameFunction
function closeModal(){
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

backdrop.addEventListener('click', closeModal);

modalNoButton.addEventListener('click',closeModal);