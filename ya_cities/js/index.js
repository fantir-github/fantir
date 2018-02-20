
function CitiesLogik(newCity) {
  this.arrOfNamedCities = ['Москва'];
  var that = this;
  this.getLastSimbol = function () {
    var lastEl = this.arrOfNamedCities[this.arrOfNamedCities.length - 1];
    var lastSimbolOfLastCity = lastEl.charAt(lastEl.length - 1);
    return lastSimbolOfLastCity.toUpperCase();
  }
  this.conformityCheck = function (newCity) {
    let lastSimbol = that.getLastSimbol();
      if (lastSimbol === newCity.charAt(0)) {
        return true;
      }
      else {
        alert('введите город начинающийся на посленюю букву предыдущего');

      }
    
  }
  this.testForRepeat = function (newCity) {
    for (var i = 0; i < this.arrOfNamedCities.length; i++) {

      if (this.arrOfNamedCities[i].toUpperCase() === newCity.toUpperCase()) {
        console.log('этот город уже называли');
        break;
      };
      if (i == this.arrOfNamedCities.length - 1) {
        console.log('it is ok');
        this.push(newCity);
        return true;
      }
    }
  }
  this.push = function (name) {
  this.arrOfNamedCities.push(name);
  }

}
CitiesService = function () {
  //должен быть сервис который посылает запросы в sql базу городов
  //возвращает нужные в определенном количистве и загружает в массив arrCities
  this.arrCities = ['Арсеньев',
    'Артем',
    'Архангельск',
    'Асбест',
    'Астрахань',
    'Ачинск',
    'Балаково',
    'Балахна',
    'Балашиха',
    'Балашов',
    'Барнаул',
    'Батайск',
    'Белгород',
    'Москва',
  'Минск'];
}

