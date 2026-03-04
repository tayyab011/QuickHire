const router = require("express").Router();
const ctrl = require("../controllers/jobController");

router.get("/", ctrl.getJobs);
router.get("/:id", ctrl.getSingleJob);
router.post("/", ctrl.createJob);
router.delete("/:id", ctrl.deleteJob);

module.exports = router;
