BEM.DOM.decl({ name: "map", modName: "api", modValue: "ymaps" }, {
    onSetMod: {
        'js': function () {
            this.loadMapsApi();
        }
    },

    // Описываем модули, которые будем загружать.
    mapsPackages: [
        [
            'package.full'
        ]
    ],

    /**
     * Загрузчик API.
     */
    loadMapsApi: function () {
        if (!window.ymaps) {
            var apiScript = document.createElement('script'),
                apiCallback = 'ymapsloaded';

            window[apiCallback] = $.proxy(function () {
                this.onAPILoaded();
            }, this);

            apiScript.src = [
                'http://api-maps.yandex.ru/2.0/?',
                '&load=' + this.mapsPackages[0].join(','),
                '&lang=' + this.params.lang,
                '&onload=' + apiCallback
            ].join('');

            document.getElementsByTagName('head')[0].appendChild(apiScript);
        } else {
            this.onAPILoaded();
        }
    },

    /**
     * Выполнится после загрузки API.
     */
    onAPILoaded: function () {
        // Запускаем инициализацию карты.
        this.initMap();
    },

    /**
     * Инициализация карты.
     */
    initMap: function () {
        var center = this.params.center || [55.76, 37.64],
            zoom = this.params.zoom;

        this._map = new ymaps.Map(this.domElem[0], {
            center: center,
            zoom: zoom,
            behaviors: ['drag', 'dblClickZoom', 'scrollZoom']
        });

        // Установка слоя с тайлами OSM.
        if (this.params.setupOSMTiles) {
            var OSMLayer = function () {
                var layer = new ymaps.Layer('http://tile.openstreetmap.org/%z/%x/%y.png', {
                    projection: ymaps.projection.sphericalMercator
                });
                layer.getZoomRange = function () {
                    var promise = new ymaps.util.Promise();
                    promise.resolve([0, 18]);
                    return promise;
                };
                return layer;
            };
            ymaps.layer.storage.add('osm#map', OSMLayer);
            var osmMapType = new ymaps.MapType('OSM', ['osm#map']);
            ymaps.mapType.storage.add('OSM', osmMapType);

            this._map.setType('OSM');
            this._map.copyrights.add('&copy; OpenStreetMap contributors, CC-BY-SA');
        }

        // Блок поделится информацией о том, что он инициализировал карту.
        // В данных передаём ссылку на экземпляр карты.
        this.trigger('map-inited', {
            map: this._map
        });
    },

    /**
     * @return {Map | Null} Экземпляр карты, либо null, если карта не инстанцирована.
     */
    getMap: function () {
        return this._map || null;
    }
});