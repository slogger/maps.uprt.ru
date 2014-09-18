modules.define('map', ['i-bem__dom', 'loader_type_js', 'jquery'], function(provide, DOM, loader, $) {

    DOM.decl('map', {
        onSetMod : {
           /**
            * Выполняется при инициализации блока
            */
            'js' : {
                'inited' : function() {
                    this._loadYmapsApi();
                }
            },

           /**
            * Выполняется после загрузки API Яндекс.Карт
            */
            'ymapsApiLoaded' : function() {
                this._drawMap()
            }
        },

        _loadYmapsApi : function() {
            var self = this;

            loader('//api-maps.yandex.ru/2.1/?lang=ru_RU&load=package.full', function() {
                self.setMod('ymapsApiLoaded');
            });
        },

        _drawMap : function() {
            var self = this;

            ymaps.ready(function() {
                ymaps.geolocation.get().then(function(res) {
                    var mapContainer = $('#map'),
                        bounds = res.geoObjects.get(0).properties.get('boundedBy'),
                        mapState = ymaps.util.bounds.getCenterAndZoom(
                            bounds,
                            [mapContainer.width(), mapContainer.height()]
                        );
                    mapState.controls = [];
                    createMap(mapState);
                }, function(e) {
                    // Если место положение невозможно получить, то просто создаем карту.
                    createMap({
                        center : [55.751574, 37.573856],
                        zoom : 2,
                        controls : []
                    });
                });

                function createMap (state) {
                    self._map = new ymaps.Map('map', state);
                }
            });

        },

        /**
         * @return {Map | Null} Экземпляр карты, либо null, если карта не инстанцирована.
         */
        getMap : function() {
            return this._map || null;
        }
    });

    provide(DOM);
});
