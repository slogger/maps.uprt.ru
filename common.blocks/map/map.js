modules.define('map', ['i-bem__dom', 'loader_type_js'], function(provide, DOM, loader) {

    DOM.decl('map', {
        onSetMod: {
            /**
            * Выполняется при инициализации блока
            */
            'js': {
                'inited': function() {
                    this._loadYmapsApi();
                }
            },

            /**
            * Выполняется после загрузки API Яндекс.Карт
            */
            'ymapsApiLoaded': function() {
                this._onApiLoaded()
            }
        },

        _loadYmapsApi: function() {
            var self = this;
            var apiCallback = 'ymapsloaded';

            loader('//api-maps.yandex.ru/2.1/?lang=ru_RU&load=package.full', function() {
                self._api = ymaps;
                delete window.ymaps;
                self.setMod('ymapsApiLoaded');
            });
        },

        _onApiLoaded: function() {
            this._api.ready(this._drawMap());
        },

        _drawMap: function() {
            var ymaps = this._api;
            var ymaps = this._api;

            console.log(ymaps);
            console.log(ymaps.Map);

            this._map = new ymaps.Map('map', {
                center: [55.76, 37.64],
                zoom: 10,
                controls: []
            });
        },

        /**
         * @return {Map | Null} Экземпляр карты, либо null, если карта не инстанцирована.
         */
        getMap: function () {
            return this._map || null;
        }
    });

    provide(DOM);
});

