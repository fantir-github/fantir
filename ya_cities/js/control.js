Control = function () {
    var that = this;
    this.logic = new CitiesLogik();
    this.citiesService = new CitiesService();
    // this.map = new Map();
  
    this.computerResponse = function () {
        let simbol = this.logic.getLastSimbol();
        let nameCity = this.findingWord(simbol);
        alert('Компьютер называет: '+nameCity);
    }
  
    this.findingWord = function (lastSimbol) {
      var arr = this.citiesService.arrCities;
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].charAt(0) === lastSimbol) {
          if (this.logic.testForRepeat(arr[i])) {
            return arr[i];
          }
        }
        if (i == arr.length - 1) {
          alert('вы победили');
        }
      }
    }
  
    this.test = function (newCity) {
      if (this.logic.conformityCheck(newCity)) {
        if(that.logic.testForRepeat(newCity)){
          this.computerResponse();
        }
      }
      else{
        console.log('что-то не так');
      }
    }
  }