var arrayInputs = document.getElementsByTagName('input');
var containerForInputs = document.querySelector('.container-for-inputs');
validationInputs();
containerForInputs.addEventListener('change', validationInputs);

function validationInputs(){
    for(var i = 0; i<arrayInputs.length; i++){
        if(arrayInputs[i].value<10 || arrayInputs[i].value>50){
            arrayInputs[i].classList.add('error-value');
        } else {
            arrayInputs[i].classList.remove('error-value');
        }
    }
}




