/***************|
|* DEPENDECIES *|
|***************/
/* WEB FRAMEWORKS */
// create instance of express router
const router = require("express").Router();

/**********************************|
|*  SET UP INDIVIDUAL API ROUTES  *|
|**********************************/
// Import in individual routes
const aboutRoutes = require("./about");
const contactRoutes = require("./contact");
const hoursRoutes = require("./hours");
const imagesRoutes = require("./images");
const servicesRoutes = require("./services");

// Sets path to use individual routes
// EXAMPLE:
//   router.use("/collectionName", collectionNameRoutes);
//   // www.url.com/api/collectionName will use routes from collectionNameRoutes
router.use("/about", aboutRoutes);
router.use("/contact", contactRoutes);
router.use("/hours", hoursRoutes);
router.use("/images", imagesRoutes);
router.use("/services", servicesRoutes);

/***********|
|* EXPORTS *| 
|***********/
// Export instance of express router which contains API routes
module.exports = router;