const router = require("express").Router();
const aboutController = require("../../controllers/aboutController");

router.route("/")
    .get(aboutController.findAll)
    .post(aboutController.create)
    .put(aboutController.update)

router.route("/about")
    .put(aboutController.update)
    .delete(aboutController.remove);
    
 module.exports = router;