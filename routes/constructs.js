const express = require("express");
const router = express.Router();
const Moralis = require("moralis/node");
const fs = require("fs");
const XLSX = require("xlsx");
const multer = require("multer");
const { deepStrictEqual } = require("assert");
const upload = multer({ dest: "uploads/" });

router.get("/construct_getAll", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run("construct_getAll", null, {
      sessionToken: global.currentUser.getSessionToken(),
    });
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.get("/construct_getById", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "construct_getById",
      { id: parseInt(req.query.id) },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.get(
  "/construct_getAllConstructsInShop",
  async function (req, res, next) {
    try {
      const resp = await Moralis.Cloud.run(
        "construct_getAllConstructsInShop",
        null,
        { sessionToken: global.currentUser.getSessionToken() }
      );
      return res.send(resp);
    } catch (e) {
      return res.send({ message: e.message });
    }
  }
);

router.get(
  "/construct_getConstructInShopById",
  async function (req, res, next) {
    try {
      const resp = await Moralis.Cloud.run(
        "construct_getConstructInShopById",
        { id: parseInt(req.query.id) },
        { sessionToken: global.currentUser.getSessionToken() }
      );
      return res.send(resp);
    } catch (e) {
      return res.send({ message: e.message });
    }
  }
);

router.get("/zone_getAll", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run("zone_getAll", null, {
      sessionToken: global.currentUser.getSessionToken(),
    });
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/zone_create", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run("zone_create", null, {
      sessionToken: global.currentUser.getSessionToken(),
    });
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.get("/zone_getZoneById", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "zone_getZoneById",
      { zoneId: req.query.id },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.get("/zone_getProfile", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "zone_getProfile",
      { zoneId: req.query.zoneId },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/zone_buy", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "zone_buy",
      { zoneId: req.body.zoneId },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/userConstruct_buy", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "userConstruct_buy",
      {
        constructDef: parseInt(req.body.constructDef),
        zoneId: req.body.zoneId,
      },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/userConstruct_build", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "userConstruct_build",
      {
        constructId: req.body.constructId,
        positionX: req.body.positionX,
        positionY: req.body.positionY,
      },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.get("/userConstruct_getById", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "userConstruct_getById",
      {
        constructId: req.query.constructId,
      },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/userConstruct_updateRotation", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "userConstruct_updateRotation",
      {
        userConstructId: req.body.userConstructId,
        constructRotation: req.body.constructRotation,
      },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/userConstruct_destroy", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "userConstruct_destroy",
      {
        userConstructId: req.body.userConstructId,
      },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/userConstruct_collectGold", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "userConstruct_collectGold",
      {
        userConstructId: req.body.userConstructId,
      },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/userConstruct_restoreLifeTime", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "userConstruct_restoreLifeTime",
      {
        userConstructId: req.body.userConstructId,
      },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/userConstruct_updateState", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "userConstruct_updateState",
      {
        userConstructId: req.body.userConstructId,
      },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.get("/worldMap_getAll", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run("worldMap_getAll");
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.get("/worldMap_getByUsername", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run("worldMap_getByUsername", {
      username: req.query.username,
    });
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.get("/worldMap_getByUserWallet", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run("worldMap_getByUserWallet", {
      userWallet: req.query.userWallet,
    });
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/worldMap_buyCell", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "worldMap_buyCell",
      {
        idCell: parseInt(req.body.idCell),
        cellIndex: parseInt(req.body.cellIndex),
      },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/worldMap_updateCell", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "worldMap_updateCell",
      {
        idCell: parseInt(req.body.idCell),
        cellIndex: parseInt(req.body.cellIndex),
        params: req.body.params,
      },
      { sessionToken: global.currentUser.getSessionToken() }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/worldMap_updateLinkAds", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run("worldMap_updateLinkAds", {
      idCell: parseInt(req.body.idCell),
      cellIndex: parseInt(req.body.cellIndex),
      linkAds: req.body.linkAds,
    });
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post("/zone_resetProfile", async function (req, res, next) {
  try {
    const resp = await Moralis.Cloud.run(
      "zone_resetProfile",
      { zoneId: req.body.zoneId },
      {
        sessionToken: global.currentUser.getSessionToken(),
      }
    );
    return res.send(resp);
  } catch (e) {
    return res.send({ message: e.message });
  }
});

router.post(
  "/config_import",
  upload.single("importFile"),
  async function (req, res, next) {
    try {
      const uploadFile = req.file;
      if (uploadFile) {
        const mimeType = uploadFile.mimetype;

        if (
          [
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-excel",
          ].indexOf(mimeType) < 0
        ) {
          return res.send({ message: "File should be xlsx" });
        }

        const data = fs.readFileSync(req.file.path);
        const workBook = XLSX.read(data);
        const sheetNameList = workBook.SheetNames;
        const sheet2JSONOpts = {
          range: 1,
          defval: "",
          blankrows: false,
          rawNumbers: true,
        };

        // Global config
        const globalConfigs = await XLSX.utils
          .sheet_to_json(workBook.Sheets[sheetNameList[0]], sheet2JSONOpts)
          .slice(0, 100)[0];

        console.log("globalConfigs", globalConfigs);

        // Zone config
        const zoneConfigs = await XLSX.utils
          .sheet_to_json(workBook.Sheets[sheetNameList[1]], sheet2JSONOpts)
          .slice(0, 100);

        console.log("zoneConfigs", zoneConfigs);

        // Trait config
        const traitConfigs = await XLSX.utils
          .sheet_to_json(workBook.Sheets[sheetNameList[2]], sheet2JSONOpts)
          .slice(0, 100);

          traitConfigs.forEach((e) => {
          e["mExtraResource"] = e["mExtraResource"].split(",").filter(n => n && n.trim() !== "");
        });

        console.log("traitConfigs", traitConfigs);

        // Construct type
        const constructTypes = await XLSX.utils
          .sheet_to_json(workBook.Sheets[sheetNameList[3]], sheet2JSONOpts)
          .slice(0, 100);

        constructTypes.forEach((e) => {
          e["mResource"] = e["mResource"].split(",");
        });

        console.log("constructTypes", constructTypes);

        // Construct configs
        const constructConfigs = await XLSX.utils
          .sheet_to_json(workBook.Sheets[sheetNameList[4]], sheet2JSONOpts)
          .slice(0, 100);

        constructConfigs.forEach((e) => {
          e["mCollectionTime"] = e["mCollectionTime"]
            .split(",")
            .map((n) => parseFloat(n));

          e["mLifeTime"] = e["mLifeTime"].split(",").map((n) => parseFloat(n));

          e["mExperience"] = e["mExperience"]
            .split(",")
            .map((n) => parseFloat(n));

          e["mProductivity"] = e["mProductivity"]
            .split(",")
            .map((n) => parseFloat(n));

          e["mListRequireResourceForRun"] = JSON.parse(
            e["mListRequireResourceForRun"]
          );

          e["mReward"] = JSON.parse(e["mReward"]);
        });

        console.log("constructConfigs", constructConfigs);

        // Descriptions
        const descriptions = await XLSX.utils
          .sheet_to_json(workBook.Sheets[sheetNameList[5]], sheet2JSONOpts)
          .slice(0, 100);

        const resp = await Moralis.Cloud.run(
          "config_update",
          {
            globalConfigs: globalConfigs,
            zoneConfigs: zoneConfigs,
            traitConfigs: traitConfigs,
            constructTypes: constructTypes,
            constructConfigs: constructConfigs,
            descriptions: descriptions,
          },
          {
            sessionToken: global.currentUser.getSessionToken(),
          }
        );

        fs.unlink(req.file.path, (err) => {
          if (err) {
            console.error(err);
          }
        });
        return res.send(resp);
      }

      return res.send({ message: "The file is empty" });
    } catch (e) {
      return res.send({ message: e.message });
    }
  }
);

module.exports = router;
