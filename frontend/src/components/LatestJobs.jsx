import { useNavigate } from "react-router-dom";

export default function LatestJobs({ jobs }) {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-50 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-extrabold">
            Latest <span className="text-primary">jobs open</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {jobs?.slice(0, 4).map((job) => (
            <div
              key={job._id}
              onClick={() => navigate(`/job/${job._id}`)}
              className="bg-white  p-6 rounded-2xl flex gap-6 border hover:shadow-lg cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                💼
              </div>

              <div>
                <h4 className="font-bold text-lg">{job.title}</h4>

                <p className="text-sm text-slate-400">
                  {job.company} • {job.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
