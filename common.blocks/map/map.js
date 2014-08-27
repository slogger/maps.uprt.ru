ymaps.ready(function() {
  var myLocation, myMap, myMapContainer, myRoute, service;
  myMap = void 0;
  myRoute = void 0;
  myMapContainer = $("#map");
  service = new GeolocationService();
  myLocation = service.getLocation({
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 1000
  });
  service.getMapSize = function() {
    return [myMapContainer.width(), myMapContainer.height()];
  };
  myLocation.then(function(loc) {
    var controller, generator, myCoords, myPlacemark;
    myCoords = [loc.latitude, loc.longitude];
    myPlacemark = new ymaps.Placemark(myCoords, loc, {
      iconImageSize: [24, 24],
      iconImageOffset: [-12, -12],
      balloonContentBodyLayout: ymaps.templateLayoutFactory.createClass(["<address>", "Город: $[properties.city|не найдено]<br/>", "</address>"].join(""))
    });
    myMap = new ymaps.Map(myMapContainer.get(0), {
      center: myCoords,
      zoom: 15,
      behaviors: ["default", "scrollZoom"]
    }, {
      adjustZoomOnTypeChange: true
    });
    myMap.geoObjects.add(myPlacemark);
    controller = new RouteController(myMap);
  });
});
