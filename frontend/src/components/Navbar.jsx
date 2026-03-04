import { MdWork } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <MdWork />
            </div>
            <h1 className="font-extrabold text-xl">QuickHire</h1>
          </div>

   
          <div className="hidden md:flex gap-8">
            <a href="#" className="hover:text-primary">
              Find Jobs
            </a>
            <a href="#" className="hover:text-primary">
              Browse Companies
            </a>
          </div>
        </div>

       
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            <button>Login</button>
            <button className="bg-primary text-white px-5 py-2 rounded-full">
              Sign Up
            </button>
          </div>
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <a className="block">Find Jobs</a>
          <a className="block">Browse Companies</a>

          <hr />
          <button className="block w-full text-left">Login</button>

          <button className="w-full bg-primary text-white py-2 rounded-full">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
