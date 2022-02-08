const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const constructs = require('./constructs');
const zones = require('./zones');
const userConstruct = require('./userConstruct');
const worldMap = require('./world-map');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    paths: {
        ...constructs,
        ...zones,
        ...userConstruct,
        ...worldMap
    }
};