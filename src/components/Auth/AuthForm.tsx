import React from "react";
import { FaUserCircle } from "react-icons/fa";

const AuthForm = () => {
  return (
    <div className="h-fit w-96  flex items-center bg-primal/70 flex-col py-8 px-12 rounded-xl shadow-2xl border-white border-2">
      <div className="flex flex-row items-center gap-6 justify-start">
        <FaUserCircle size={50} className="text-white" />
        <span className="text-white text-2xl">Welcome</span>
      </div>

      <input
        type="email"
        placeholder="Email"
        className="mt-12 px-6 py-3 bg-white rounded-md block text-primal  placeholder:text-primal/60 appearance-none focus:outline-none focus:ring-0 peer  w-full "
      />
      <input
        type="password"
        placeholder="Password"
        className="mt-8 px-6 py-3 bg-white rounded-md block text-primal placeholder:text-primal/60 appearance-none focus:outline-none focus:ring-0 peer  w-full "
      />
      <span className="mt-6 text-sm text-white">Guest Account</span>
      <span className="mt-2 text-sm text-white">
        guest@email.com / guest123{" "}
      </span>
      <button className="mt-8 bg-primal text-white px-6 py-3 rounded-md font-bold border-white border-2 hover:bg-white hover:text-primal hover:scale-105 transform duration-500 ease-in-out">
        Login
      </button>
    </div>
  );
};

export default AuthForm;
