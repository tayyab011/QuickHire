import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <Link to={`/job/${job._id}`}>
      <div className="card bg-base-100 shadow hover:shadow-xl transition cursor-pointer">
        <div className="card-body">
          <h3 className="font-bold text-lg">{job.title}</h3>

          <p className="text-gray-600">{job.company}</p>

          <p className="text-sm text-gray-500">{job.location}</p>

          <div className="badge badge-primary mt-2">{job.category}</div>
        </div>
      </div>
    </Link>
  );
}
