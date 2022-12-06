const {alias} = require ("react-app-rewire-alias");

module.exports = function override(config,env ){
    alias({
        '@components' : 'src/components',
        '@constants' : 'src/constants',
        '@layout' : 'src/layout',
        '@pages' : 'src/pages',
        '@routesData' : 'src/routesData',
        '@routers' : 'src/routers',
        '@services' : 'src/services',
        '@static' : 'src/static',
        '@styles' : 'src/styles',
        '@utils' : 'src/utils',
        '@redux' : 'src/redux',
    })(config);

    return config;
}