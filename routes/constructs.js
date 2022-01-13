const express = require("express");
const router = express.Router();
const Moralis = require('moralis/node');
const { request } = require("express");

router.get('/construct_getAll', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('construct_getAll');
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({ message: error.message });
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

router.get('/construct_getById', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('construct_getById', { id: parseInt(req.query.id) });
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

router.get('/construct_getAllConstructsInShop', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('construct_getAllConstructsInShop');
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({ message: error.message });
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

router.get('/construct_getConstructInShopById', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('construct_getConstructInShopById', { id: parseInt(req.query.id) });
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({ message: error.message });
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

router.get('/zone_getAll', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('zone_getAll');
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

router.post('/zone_create', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('zone_create');
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

router.get('/zone_getZoneById', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('zone_getZoneById', { zoneId: req.query.id });
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

router.get('/zone_getProfile', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('zone_getProfile', { zoneId: req.query.id });
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

router.get('/zone_buy', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('zone_buy', { zoneId: req.query.id });
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

router.post('/userConstruct_buy', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('userConstruct_buy', {
                    constructDef: parseInt(req.body.constructDef),
                    zoneId: req.body.zoneId
                });
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

router.post('/userConstruct_build', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('userConstruct_build', {
                    constructId: req.body.constructId,
                    positionX: req.body.positionX,
                    positionY: req.body.positionY
                });
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

router.get('/userConstruct_getById', async function (req, res, next) {
    try {
        Moralis.User.become(global.currentUser.getSessionToken()).then(async function (user) {
            try {
                const resp = await Moralis.Cloud.run('userConstruct_getById', {
                    constructId: req.query.constructId
                });
                return res.send(resp);
            } catch (e) {
                return res.send({ message: e.message });
            }
        }, function (error) {
            console.log('error: ', error.message);
            // The token could not be validated.
            return res.send({});
        });
    } catch (e) {
        return res.send({ message: e.message });
    }
});

module.exports = router;