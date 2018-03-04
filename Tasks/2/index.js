var editBtn = document.getElementById('edit-btn');
var saveBtn = document.getElementById('save-btn');
var labelLastNameEl = document.querySelector('#l-last-name');
var labelFirstNameEl = document.querySelector('#l-first-name');
var inputsArrayEl = document.querySelectorAll('.inputClass');
startPage();
editBtn.addEventListener('click', onEditBtnClick);
saveBtn.addEventListener('click', onSaveBtnClick);

function startPage() {
    saveBtn.classList.add('hidden');
}
function onEditBtnClick() {
    for (var i = 0; i < inputsArrayEl.length; i++) {
        inputsArrayEl[i].classList.remove('hidden');
    }
    labelFirstNameEl.classList.add('hidden');
    labelLastNameEl.classList.add('hidden');
    editBtn.classList.add('hidden');
    saveBtn.classList.remove('hidden');
}
function onSaveBtnClick() {
    labelFirstNameEl.innerHTML = inputsArrayEl[0].value;
    labelLastNameEl.innerHTML = inputsArrayEl[1].value;
    labelFirstNameEl.classList.remove('hidden');
    labelLastNameEl.classList.remove('hidden');
    editBtn.classList.remove('hidden');
    saveBtn.classList.add('hidden');
    for (var i = 0; i < inputsArrayEl.length; i++) {
        inputsArrayEl[i].classList.add('hidden');
    }
}