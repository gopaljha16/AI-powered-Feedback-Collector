import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex w-full pl-15 pr-15 mt-8  items-center justify-between">
      <div>
        <Link className="text-2xl" to="/">
          Revizo
        </Link>
      </div>

      <div className="flex gap-20">
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/feeback">Give Feedback</Link>
        </div>
        <div>
          <Link to="/about">About</Link>
        </div>
        <div>
          <Link to="/contact">Contact </Link>
        </div>

        <div>
          <Link>theme </Link>
        </div>
      </div>

      <div className="flex gap-10">
        <div>
          <Link to="/login">Login</Link>
        </div>

        <div >
          <Link className="bg-orange-400 px-2 py-2 text-white font-semibold rounded-md items-center"  to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
