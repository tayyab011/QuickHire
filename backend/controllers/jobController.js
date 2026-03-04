const Job = require("../models/Job");

exports.getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};

exports.getSingleJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
};

exports.createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
};

exports.deleteJob = async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
