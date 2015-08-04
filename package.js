var pathReactLoader = '.npm/package/node_modules/react-loader/',
    pathSpin = pathReactLoader + 'node_modules/spin.js/';

Package.describe({
    summary: 'A react loader based on spin.js',
    version: '0.0.5',
    name: 'dgellow:react-loader',
    documentation: 'README.md',
    git: 'https://github.com/dgellow/meteor-react-loader.git'
});

Npm.depends({
    'react-loader': '1.2.0'
});

Package.onUse(function(api) {
    api.addFiles([
        pathSpin + 'spin.js',
        pathReactLoader + 'lib/react-loader.js'
    ], 'client');
});
