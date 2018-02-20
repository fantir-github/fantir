function map(name) {
    var divEl = document.querySelector('#myMap');
    divEl.innerHTML = '';
    ymaps.geocode(name, { results: 1 }).then(function (res) {
        var firstGeoObject = res.geoObjects.get(0),
            myMap = new ymaps.Map("myMap", {
                center: firstGeoObject.geometry.getCoordinates(),
                zoom: 11
            });
    });}

// ymaps.ready(init);
//     var myMap;
//     var myPlacemark;
//     var coord = [55.76, 37.64];
//     function init() {
//         // show();
//         function show(coord){
//             myMap = new ymaps.Map('myMap', {
//                 center: coord,
//                 zoom: 7 
//             });
//         }
//         var myGeocoder = ymaps.geocode("минск");
//             myGeocoder.then(
//                 function (res) {
//                    coord  =  res.geoObjects.get(0).geometry.getCoordinates();
//                     console.log(coord);
//                     myPlacemark = new ymaps.Placemark(coord);
//                     myMap.geoObjects.add(myPlacemark);
//                     show(coord);
//                 },
//                 function (err) {
//                     alert('Ошибка');
//                 }
//             );

//     }



// ymaps.ready(function () {
//     var map;
//     ymaps.geolocation.get().then(function (res) {
//         var mapContainer = $('#myMap'),
//             bounds = res.geoObjects.get(0).properties.get('boundedBy'),
//             // Рассчитываем видимую область для текущей положения пользователя.
//             mapState = ymaps.util.bounds.getCenterAndZoom(
//                 bounds,
//                 [mapContainer.width(), mapContainer.height()]
//             );
//         createMap(mapState);
//     }, function (e) {
//         // Если местоположение невозможно получить, то просто создаем карту.
//         createMap({
//             center: [55.751574, 37.573856],
//             zoom: 2
//         });
//     });
    
//     function createMap (state) {
//         map = new ymaps.Map('map', state);
//     }
// });


// function Map() {
//  this.coord = [54.22, 47.22];
//     this.myMap = new ymaps.Map('myMap', {
//         center: this.coord,
//         zoom: 5
//     });
//     this.showCity = function (newCity) {
//         that = this;
//         this.myGeocoder = ymaps.geocode(newCity);
//         this.myGeocoder.then(
//             function (res) {
//                 this.coord = res.geoObjects.get(0).geometry.getCoordinates();
//                 console.log(this.coord);
//                 var myPlacemark = new ymaps.Placemark(this.coord);
//                 that.myMap.geoObjects.add(myPlacemark);
//             },
//             function (err) {
//                 alert('Ошибка');
//             }
//         );
//     }
// }

// var map;
// ymaps.ready(function(){
//     debugger;
//     map = new Map();
//     map.showCity('москва');
// })


