import { useCart } from "@/context/CartContext";
import { useLogin } from "@/hooks/useLogin";
import React, { useCallback, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const AuthForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { setItemNumber, setItemList } = useCart();
  const login = useLogin(email, password);

  const handleLogin = useCallback(async () => {
    if (!email || !password) {
      setErrorMessage("Please fill all the fields");
      return;
    }
    setErrorMessage("");
    let response = await login();
    if (response?.error) {
      setErrorMessage(response.error);
    } else {
      setItemNumber(0);
      setItemList([]);
    }
  }, [login, email, password, setErrorMessage, setItemNumber, setItemList]);

  return (
    <div className="h-fit w-96  flex items-center bg-primal/70 flex-col py-8 px-12 rounded-xl shadow-2xl border-white border-2">
      <div className="flex flex-row items-center gap-6 justify-start">
        <FaUserCircle size={50} className="text-white" />
        <span className="text-white text-2xl">Welcome</span>
      </div>

      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="mt-12 px-6 py-3 bg-white rounded-md block text-primal  placeholder:text-primal/60 appearance-none focus:outline-none focus:ring-0 peer  w-full "
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="mt-8 px-6 py-3 bg-white rounded-md block text-primal placeholder:text-primal/60 appearance-none focus:outline-none focus:ring-0 peer  w-full "
      />
      <span className="mt-6 text-sm text-white">Guest Account</span>
      <span className="mt-2 text-sm text-white">
        guest@email.com / guest123{" "}
      </span>

      <button
        onClick={handleLogin}
        className="mt-8 bg-primal text-white px-6 py-3 rounded-md font-bold border-white border-2 hover:bg-white hover:text-primal hover:scale-105 transform duration-500 ease-in-out"
      >
        Login
      </button>
      {errorMessage && (
        <span className="text-red-800 font-bold  text-lg mt-4 p-2 rounded-3xl">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default AuthForm;
