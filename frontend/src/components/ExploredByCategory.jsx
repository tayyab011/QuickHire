import i1 from "../assets/Icon1.png";
import i2 from "../assets/Icon2.png";
import i3 from "../assets/Icon3.png";
import i4 from "../assets/icon4.png";
import i5 from "../assets/icon6.png";
import i6 from "../assets/icon7.png";
import i7 from "../assets/icon8.png";
import i8 from "../assets/icon9.png";

export default function ExploreByCategory() {
  const categories = [
    { name: "Design", jobs: "235 jobs available", image: i1 },
    { name: "Sales", jobs: "756 jobs available", image: i2 },
    { name: "Marketing", jobs: "140 jobs available", image: i3, active: true },
    { name: "Finance", jobs: "325 jobs available", image: i4 },
    { name: "Technology", jobs: "325 jobs available", image: i5 },
    { name: "Engineering", jobs: "325 jobs available", image: i6 },
    { name: "Business", jobs: "325 jobs available", image: i7 },
    { name: "Human Resource", jobs: "325 jobs available", image: i8 },
  ];

  return (
    <section className="py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-extrabold">
            Explore by <span className="text-primary">category</span>
          </h2>

          <a className="text-primary font-bold flex items-center gap-2 cursor-pointer">
            Show all jobs
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl border transition-all
              ${
                cat.active
                  ? "bg-primary text-white shadow-xl"
                  : "bg-white  border-slate-100  hover:shadow-xl"
              }`}
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-12 h-12 mb-4 object-contain"
              />

              <h3 className="text-xl font-bold mb-2">{cat.name}</h3>

              <p className="opacity-70">{cat.jobs}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
