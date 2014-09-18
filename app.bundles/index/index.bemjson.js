({
    block : 'page',
    title : 'maps.uprt.ru',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'css', url : 'index.css' }
    ],
    mix : [{ block : 'waves', js : true }],
    scripts : [{ elem : 'js', url : 'index.js' }],
    content : [
        {
            block : 'map',
            attrs : { id : 'map' },
            js : true,
        },
        {
            block : 'search',
            js : true,

            content : [
                {
                    block : 'input',
                    // mods : { theme : 'material', type : 'search'},
                    placeholder  : 'Куда вам надо?'
                },
                {
                    block : 'button',
                    cls : 'waves-effect waves-light',
                    content : [
                        'Поиск'
                    ]
                },
                {
                    block : 'button',
                    cls : 'waves-effect waves-light',
                    content : [
                        'Фильтр'
                    ]
                }

            ]
        },
        {
            block : 'foobar',
            content : [
                // {
                //     block : 'menu-button',
                //     mix : [{ block : 'button'}]
                // },
                {
                    block : 'share',
                    mods : { service : 'vkontakte', theme : 'normal', size : 'l' },
                    js : {
                        url : 'http://voischev.github.io/bem-social/',
                        title : 'BEM Social Components Library',
                        description : 'Fork me on GitHub',
                        image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                                'master/desktop.bundles/index/blocks/page/image/bem.png'
                    },
                    icon : { block : 'icon', mods : { service : 'vkontakte' } }
                },
                {
                    block : 'share',
                    mods : { service : 'facebook', theme : 'normal', size : 'l' },
                    js : {
                        url : 'http://voischev.github.io/bem-social/',
                        title : 'BEM Social Components Library',
                        description : 'Fork me on GitHub',
                        image : 'https://raw.githubusercontent.com/voischev/bem-social/' +
                                'master/desktop.bundles/index/blocks/page/image/bem.png'
                    },
                    icon : { block : 'icon', mods : { service : 'facebook' } }
                },
                {
                    block : 'share',
                    mods : { service : 'twitter', theme : 'normal', size : 'l' },
                    js : {
                        url : 'http://voischev.github.io/bem-social/',
                        title : 'BEM Social Components Library #b_',
                        description : 'Fork me on GitHub'
                    },
                    icon : { block : 'icon', mods : { service : 'twitter' } }
                },
                {
                    block : 'share',
                    mods : { service : 'gplus', theme : 'normal', size : 'l' },
                    js : {
                        url : 'http://voischev.github.io/bem-social/'
                    },
                    icon : { block : 'icon', mods : { service : 'gplus' } }
                }
            ]
        }
        // '<!-- Yandex.Metrika counter --><script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter25978051 = new Ya.Metrika({id:25978051, webvisor:true, clickmap:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/25978051" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->'
    ]
})
