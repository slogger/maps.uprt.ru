module.exports = function(config) {

    config.nodes('*.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [ require('enb/techs/file-provider'), { target: '?.bemjson.js' } ],
            [ require('enb/techs/files') ],
            [ require('enb/techs/deps') ],
            [ require('enb/techs/css') ],
            [ require('enb/techs/bemdecl-from-bemjson') ],
            [ require('enb-bemxjst/techs/bemtree-old') ],
            [ require('enb-diverse-js/techs/browser-js'), { target: '?.js' } ],
            [ require('enb-bemxjst/techs/bemhtml-old') ],
            [ require('enb-bemxjst/techs/html-from-bemjson') ]
        ]);

        nodeConfig.addTargets([
            '?.min.css',
            '?.bemtree.js',
            '?.js',
            '?.bemhtml.js',
            '?.html'
        ]);
    });

    config.nodes('*app.bundles/*', function(nodeConfig) {
        nodeConfig.addTechs([
            [ require('enb/techs/levels'), { levels: getDesktops(config) } ],
        ]);
    });

    config.mode('development', function(modeConfig) {
        config.nodes('*.bundles/*', function(nodeConfig) {
            nodeConfig.addTechs([
                [ require('enb/techs/file-copy'), { sourceTarget: '?.css', destTarget: '?.min.css' } ],
                [ require('enb/techs/file-copy'), { sourceTarget: '?.js', destTarget: '?.min.js' } ],
                [ require('enb-diverse-js/techs/vanilla-js'), { target: '?.vanilla.js' } ],
            ]);
        });
    });

    config.mode('production', function(modeConfig) {
        config.nodes('*.bundles/*', function(nodeConfig) {
            nodeConfig.addTechs([
                [ require('enb/techs/borschik'), { sourceTarget: '?.css', destTarget: '?.min.css' } ],
                [ require('enb/techs/borschik'), { sourceTarget: '?.js', destTarget: '?.min.js' } ],
                [ require('enb-diverse-js/techs/vanilla-js'), { target: '?.vanilla.js' } ],
            ]);
        });
    });

};

function getDesktops(config) {
    return [
        { path: 'libs/bem-core/common.blocks', check: false },
        { path: 'libs/bem-core/desktop.blocks', check: false },
        { path: 'libs/bem-mvc/common.blocks', check: false },
        { path: 'libs/bem-components/common.blocks', check: false },
        { path: 'libs/bem-components/desktop.blocks', check: false },
        'common.blocks',
        'design.blocks'
    ].map(function(level) {
        return config.resolvePath(level);
    });
}
