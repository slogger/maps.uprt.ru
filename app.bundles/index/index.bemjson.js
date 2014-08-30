({
    block: 'page',
    title: 'maps.uprt.ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'css', url: 'index.css' }
    ],
    mix: [ { block: 'waves', js: true } ],
    scripts: [{ elem: 'js', url: 'index.js' }],
    content: [
        {
            block: 'map',
            attrs: { id: 'map' },
            js: true,
        },
        {
            block: 'footer'
        },
       '<!-- Yandex.Metrika counter --><script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter25978051 = new Ya.Metrika({id:25978051, webvisor:true, clickmap:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/25978051" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->'
    ]
})
