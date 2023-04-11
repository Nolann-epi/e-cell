import AuthForm from "@/components/AuthForm";
import Navbar from "@/components/Navbar";
import { useCallback, useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  //const login = useLogin(email, password);
  const [errorMessage, setErrorMessage] = useState("");

  //   const handleRegister = useCallback(async () => {
  //     if (!username || !email || !password) {
  //       setErrorMessage("Please fill all the fields");
  //       return;
  //     }
  //     let response = await register();
  //     if (response?.status !== 200) {
  //       console.log(response);
  //       setErrorMessage(response?.message);
  //     }
  //   }, [register]);

  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-78px)] w-screen">
        <div className="h-full w-full bg-primal opacity-80 flex justify-center pt-36">
          <AuthForm />
        </div>
      </div>
    </>
  );
};

export default Auth;
