import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getSingleJob } from "../services/jobService";

import { applyJob } from "../services/applicationService";

export default function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // =====================
  // FETCH JOB
  // =====================
  useEffect(() => {
    getSingleJob(id)
      .then((res) => {
        setJob(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  // =====================
  // APPLY SUBMIT
  // =====================
  const handleApply = async (e) => {
    e.preventDefault();

    const formData = {
      jobId: id,
      name: e.target.name.value,
      email: e.target.email.value,
      resumeLink: e.target.resume.value,
      coverNote: e.target.note.value,
    };

    try {
      await applyJob(formData);

      alert("Application Submitted ✅");

      e.target.reset();
    } catch (error) {
      alert("Application Failed ❌");
    }
  };

  // =====================
  // LOADING STATE
  // =====================
  if (loading) return <p className="text-center mt-20">Loading...</p>;

  if (!job) return <p>Job not found</p>;

  // =====================
  // UI
  // =====================
  return (
    <div className="max-w-5xl mx-auto p-10">
      {/* JOB INFO */}
      <h1 className="text-4xl font-bold">{job.title}</h1>

      <p className="mt-3 text-lg">{job.company}</p>

      <p className="text-gray-500">{job.location}</p>

      <p className="mt-6">{job.description}</p>

      {/* APPLY FORM */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Apply Now</h2>

        <form onSubmit={handleApply} className="space-y-4">
          <input
            name="name"
            placeholder="Your Name"
            required
            className="input input-bordered w-full"
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            required
            className="input input-bordered w-full"
          />

          <input
            name="resume"
            placeholder="Resume Link"
            required
            className="input input-bordered w-full"
          />

          <textarea
            name="note"
            placeholder="Cover Note"
            required
            className="textarea textarea-bordered w-full"
          />

          <button className="btn btn-primary">Submit Application</button>
        </form>
      </div>
    </div>
  );
}
