var buttonShowEl = document.querySelector('.showButton');
buttonShowEl = addEventListener('click', showPassword);

function showPassword(){ 
    var inputPasswordEl = document.querySelector('.passwordClass'); 
    inputPasswordEl.type = 'text';    
}
