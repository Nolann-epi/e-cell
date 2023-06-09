import AuthForm from "@/components/Auth/AuthForm";
import Navbar from "@/components/Navbar";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}

const Auth = ({ session }: any) => {
  return (
    <>
      <Navbar session={session} />
      <div className="h-[calc(100vh-78px)] w-screen">
        <div className="h-full w-full bg-primal opacity-80 flex justify-center pt-36">
          <AuthForm />
        </div>
      </div>
    </>
  );
};

export default Auth;
