export default function Marquee() {
  return (
    <section className="py-12 border-y border-slate-100 ">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm  font-semibold text-left text-slate-400 mb-8 uppercase tracking-widest md:pl-26 pl-0">
          Companies we helped grow
        </p>

        <div className="flex flex-wrap justify-center items-center md:gap-40 gap-12  opacity-50 grayscale">
          <span className="text-2xl font-bold">vodafone</span>

          <span className="text-2xl font-bold italic">intel.</span>

          <span className="text-2xl font-bold tracking-[0.2em]">TESLA</span>

          <span className="text-2xl font-extrabold">AMD</span>

          <span className="text-2xl font-serif">Talkit</span>
        </div>
      </div>
    </section>
  );
}
