export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12">
        <div>
          <h2 className="text-white text-xl font-bold mb-4">QuickHire</h2>

          <p>
            Great platform for job seekers searching for new career heights.
          </p>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">About</h5>
          <ul className="space-y-2">
            <li>Companies</li>
            <li>Pricing</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">Resources</h5>
          <ul className="space-y-2">
            <li>Help Docs</li>
            <li>Guide</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h5 className="text-white font-bold mb-4">Get job notifications</h5>

          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Email Address"
              className="input input-bordered w-full bg-slate-800"
            />

            <button className="btn btn-primary">Subscribe</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
