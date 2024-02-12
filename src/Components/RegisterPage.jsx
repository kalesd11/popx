import React from "react";
import { useNavigate } from "react-router";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col w-72 shadow-md h-screen justify-center bg-slate-100 border-2">
        <div className="m-2">
          <h1 className="font-bold text-2xl my-2">Create your PopX account</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/profile");
            }} id="register"
          >
            <input
              type="text"
              className="my-2 w-full border-2 rounded-md p-1 outline-violet-500"
              placeholder="Enter your full name"
              required
            />
            <input
              type="text"
              className="my-2 w-full border-2 rounded-md p-1 outline-violet-500"
              placeholder="Enter your mobile number"
              required
            />
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
            <input
              type="text"
              className="my-2 w-full border-2 rounded-md p-1 outline-violet-500"
              placeholder="Enter your company Name"
              required
            />
            <label
              htmlFor="isAgency"
              className="block text-violet-500 font-semibold"
            >
              Are you an Agency?
            </label>
            <label htmlFor="isAgency1">Yes :</label>
            <input
              type="radio"
              className="m-2"
              name="isAgency"
              value="true"
              id="isAgency1"
            />
            <label htmlFor="isAgency2">No : </label>
            <input type="radio" name="isAgency" id="isAgency2" value="false" />
          </form>
        </div>
            <button
              type="submit"
              form="register"
              className="font-bold text-white font-sans my-2 h-10 bg-violet-700 w-full rounded-md"
            >
              Create Account
            </button>
      </div>
    </div>
  );
};

export default RegisterPage;
