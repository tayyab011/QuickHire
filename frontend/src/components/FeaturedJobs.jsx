import JobCard from "./JobCard";

export default function FeaturedJobs({ jobs = [] }) {
  return (
    <section className="px-12 py-16 bg-base-200">
      <h2 className="text-3xl font-bold mb-10">Featured Jobs</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {jobs.slice(0, 6).map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>
    </section>
  );
}
