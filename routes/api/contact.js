const router = require("express").Router();
const contactController = require("../../controllers/contactController");

router.route("/")
    .get(contactController.findAll)
    .post(contactController.create)
    .put(contactController.update)

router.route("/contact")
    .put(contactController.update)
    .delete(contactController.remove);
    
 module.exports = router;