const router = require("express").Router();
const imagesController = require("../../controllers/imagesController");

router.route("/")
    .get(imagesController.findAll)
    .post(imagesController.create)
    .put(imagesController.update)

router.route("/images")
    .put(imagesController.update)
    .delete(imagesController.remove);
    
 module.exports = router;