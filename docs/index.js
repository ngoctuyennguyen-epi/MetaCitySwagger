const basicInfo = require('./basicInfo');
const servers = require('./servers');
const components = require('./components');
const tags = require('./tags');
const constructs = require('./constructs');
const constructTypes = require('./construct_types');
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
        ...constructTypes,
        ...zones,
        ...userZones,
        ...userZoneConstruct
    }
};