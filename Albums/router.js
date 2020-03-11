const Album = require("./model");
const { Router } = require("express");

const router = new Router();

router.get("/albums", async (req, res, next) => {
  try {
    const album = await Album.findAll({
      attributes: ["title", "artist", "url"],
      raw: true
    });
    res.send(album);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
