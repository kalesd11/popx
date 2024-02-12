import React from "react";
import { useNavigate } from "react-router";

const LoginPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div className="flex flex-col w-72 shadow-md h-screen justify-center bg-slate-100 border-2">
        <div className="m-2">
          <h1 className="font-bold text-2xl my-2">
            Sign in to your PopX account
          </h1>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <form onSubmit={(e)=>{
            e.preventDefault();
            navigate('/profile')
          }}>
            <input
              type="email"
              className="my-2 w-full border-2 rounded-md p-1 outline-violet-500"
              placeholder="Enter email address"
              required
            />
            <input
              type="password"
              className="my-2 w-full border-2 rounded-md p-1 outline-violet-500"
              required
              placeholder="Enter Password"
            />
            <button
              type="submit"
              className="font-bold text-white font-sans my-2 h-10 bg-gray-400 w-full rounded-md"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
