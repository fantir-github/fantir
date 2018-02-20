
var btnSubmit = document.querySelector('.btnSubmit');
btnSubmit.addEventListener('click', onBtnubmitClick);
var control = new Control();
alert('Первый грод: Москва. Вам на "А"')
// ymaps.ready(map.myMap);

function onBtnubmitClick(e){
    e.preventDefault();

    var newSityEl = document.querySelector('.newCityName');
    ui(newSityEl.value);
    newSityEl.value = ''
}
function ui(nameCity){
    control.test(nameCity.toUpperCase());
    map(nameCity);

    var answer = control.citiesService.arrCities[control.citiesService.arrCities.length-1];
    map(answer);
    // map.showCity(answer);
}




