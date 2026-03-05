import { createJob, getJobs, deleteJob } from "../services/jobService";
import { useState, useEffect } from "react";

export default function Admin() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    loadJobs();
  }, []);

  function loadJobs() {
    getJobs()
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const jobData = {
      title: e.target.title.value,
      company: e.target.company.value,
      category: e.target.category.value,
      location: e.target.location.value,
      description: e.target.description.value,
    };

    console.log(jobData);

    createJob(jobData)
      .then(() => {
        e.target.reset();
        loadJobs();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>

    
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          placeholder="Job Title"
          className="input input-bordered w-full"
          required
        />

        <input
          name="company"
          placeholder="Company"
          className="input input-bordered w-full"
          required
        />
        <input
          name="category"
          placeholder="category"
          className="input input-bordered w-full"
          required
        />

        <input
          name="location"
          placeholder="Location"
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="description"
          placeholder="Job Description"
          className="textarea textarea-bordered w-full"
          required
        />

        <button className="btn btn-primary w-full">Add Job</button>
      </form>

      <div className="mt-10 space-y-3">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="flex justify-between items-center bg-base-200 p-4 rounded"
          >
            <p>{job.title}</p>

            <button
              onClick={() => {
                deleteJob(job._id).then(loadJobs);
              }}
              className="btn btn-error btn-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
