const router = require("express").Router();
const Application = require("../models/Application");

router.post("/", async (req, res) => {
  const app = await Application.create(req.body);
  res.json(app);
});

module.exports = router;
