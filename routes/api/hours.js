const router = require("express").Router();
const hoursController = require("../../controllers/hoursController");

router.route("/")
    .get(hoursController.findAll)
    .post(hoursController.create)
    .put(hoursController.update)

router.route("/hours")
    .put(hoursController.update)
    .delete(hoursController.remove);
    
 module.exports = router;