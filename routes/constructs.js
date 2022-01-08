const express = require("express");
const router = express.Router();
const Moralis = require('moralis/node');
const {request} = require("express");

router.get('/construct_getAll', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('construct_getAll');
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({message: error.message});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.get('/construct_getById', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('construct_getById', {id: req.query.id});
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.get('/construct_getConstructShop', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('construct_getConstructShop');
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({message: error.message});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.get('/zone_getAll', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('zone_getAll');
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.post('/zone_create', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('zone_create', {address: req.body.address});
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.get('/userZone_getForUser', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('userZone_getForUser');
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.get('/userZone_getZoneById', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('userZone_getZoneById', {zone_id: request.query.zone_id});
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.post('/userZone_buy', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('userZone_buy', {
                zone_id: request.body.zone_id,
                zone_name: request.body.zone_name
            });
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.post('/userZoneConstruct_buy', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('userZoneConstruct_buy', {
                construct_id: request.body.construct_id,
                construct_name: request.body.construct_name,
                user_zone_id: request.body.user_zone_id
            });
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.post('/userZoneConstruct_build', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('userZoneConstruct_build', {
                user_zone_construct_id: request.body.user_zone_construct_id,
                nav_point_x: request.body.nav_point_x,
                nav_point_y: request.body.nav_point_y
            });
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.get('/userZoneConstruct_getForUserZone', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('userZoneConstruct_getForUserZone', {
                user_zone_construct_id: request.query.user_zone_construct_id,
                nav_point_x: request.query.nav_point_x,
                nav_point_y: request.query.nav_point_y
            });
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.get('/userZoneConstruct_getForUserZoneByInventory', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('userZoneConstruct_getForUserZone', {
                user_zone_id: request.query.user_zone_id,
                is_built: request.query.is_built
            });
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

router.get('/userZoneConstruct_getConstructById', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            const resp = await Moralis.Cloud.run('userZoneConstruct_getConstructById', {
                zone_construct_id: request.query.zone_construct_id
            });
            return res.send(resp);
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({message: e.message});
    }
});

module.exports = router;