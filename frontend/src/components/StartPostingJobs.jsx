import dasbrd from "../assets/3.1 Dashboard Company.png";
export default function StartPosting() {
  return (
    <section className="max-w-7xl mx-auto px-4 my-24">
      <div className="bg-primary rounded-3xl overflow-hidden relative min-h-[400px] flex items-center">
        <div className="p-12 lg:p-20 z-10 lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Start posting <br /> jobs today
          </h2>

          <p className="text-indigo-100 text-lg mb-10">
            Start posting jobs for only $10. Reach thousands of qualified
            candidates.
          </p>

          <button className="bg-white text-primary px-8 py-4 rounded-xl font-bold">
            Sign Up For Free
          </button>
        </div>
        <img src={dasbrd} alt="" />
      </div>
    </section>
  );
}
