var changeValuesBtn = document.getElementById('change-values-btn');

var onChangeValuesBtnClick = function() {
    window.alert('values should be changed');
    var firstValueEl = document.getElementById('first-value');
    var secondValueEl = document.getElementById('second-value');
    var timeVariable = firstValueEl.value;
    firstValueEl.value = secondValueEl.value;
    secondValueEl.value = timeVariable;
}

changeValuesBtn.addEventListener('click', onChangeValuesBtnClick);