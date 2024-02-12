import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex w-72 shadow-md h-screen justify-center items-end bg-slate-100 border-2">
      <div className="m-2">
        <h1 className="font-bold text-2xl my-2">Welcome to PopX</h1>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <Link to="/register">
          <button className="font-semibold text-white my-2 h-10 bg-violet-600 w-full rounded-md">
            Create Account
          </button>
        </Link>

        <Link to="/login">
          <button className="font-semibold font-sans my-2 h-10 bg-violet-400 w-full rounded-md">
            Already Registred? Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
