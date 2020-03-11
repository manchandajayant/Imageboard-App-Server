const Album = require("./model");
const { Router } = require("express");

const router = new Router();

router.get("/albums", async (req, res, next) => {
  try {
    const album = await Album.findAll({
      attributes: ["title", "Artist", "url"],
      raw: true
    });
    res.send(album);
  } catch (error) {
    next(error);
  }
});

router.post("/albums", async (req, res, next) => {
  try {
    const createAlbum = await Album.create(req.body);

    res.json(createAlbum);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
