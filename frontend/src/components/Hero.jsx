import herodis from "../assets/design-b3dcb2a2-23f6-41f0-b740-595184e6d3e9 1.svg";
import pattern from "../assets/Pattern.png";
export default function Hero() {
  return (
    <section className="pt-12 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <h1 className="text-6xl font-extrabold leading-tight">
            Discover more than
            <span className="text-primary block">5000+ Jobs</span>
          </h1>

          <p className="mt-6 text-gray-500">
            Great platform for job seekers searching for new careers.
          </p>

          <div className="bg-white p-3 rounded-2xl shadow mt-8 flex gap-2">
            <input
              placeholder="Job title"
              className="input input-bordered w-full"
            />

            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        <img src={herodis} className="rounded-3xl relative z-10" />
        <img src={pattern} className="rounded-3xl absolute top-0 right-0 z-0" />
      </div>
    </section>
  );
}
