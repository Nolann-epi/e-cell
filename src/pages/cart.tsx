import CartMenu from "@/components/CartMenu";
import Navbar from "@/components/Navbar";
import PriceMenu from "@/components/PriceMenu";
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
      <div className="h-fit w-screen bg-white lg:px-16 md:px-14 px-4 ">
        <div className="w-full h-fit lg:flex-row-reverse flex-col-reverse flex lg:justify-center lg:items-start lg:gap-16 min-w-[350px]">
          <div className="md:hidden h-10"></div>
          <PriceMenu />
          <CartMenu />
        </div>
      </div>
    </>
  );
};

export default Auth;
