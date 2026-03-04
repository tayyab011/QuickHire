const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
    name: String,
    email: String,
    resumeLink: String,
    coverNote: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Application", applicationSchema);
