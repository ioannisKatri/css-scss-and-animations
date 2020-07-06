//This variable should hold a reference to the html element
//it will give us access to the parsed document.


//QuerySelector will select tonly one element, the first element.
var backdrop = document.querySelector('.backdrop');

//selects all elements within an array
// var backdrop = document.querySelectorAll('.backdrop');


//we see it as an object with .dir
console.dir(backdrop);
console.log(backdrop);

//manipulates the INLINE styles of the element
backdrop.style.display = 'block';