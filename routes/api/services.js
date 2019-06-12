const router = require("express").Router();
const servicesController = require("../../controllers/servicesController");

router.route("/")
    .get(servicesController.findAll)
    .post(servicesController.create)
    .put(servicesController.update)

router.route("/services")
    .put(servicesController.update)
    .delete(servicesController.remove);
    
 module.exports = router;