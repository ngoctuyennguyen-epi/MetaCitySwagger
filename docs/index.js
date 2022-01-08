const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const constructs = require('./constructs');
const zones = require('./zones');
const userZones = require('./userZones');
const userZoneConstruct = require('./userZoneConstruct');

module.exports = {
    ...basicInfo,
    ...servers,
    ...components,
    ...tags,
    paths: {
        ...constructs,
        ...zones,
        ...userZones,
        ...userZoneConstruct
    }
};