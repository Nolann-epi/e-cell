import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useLogin = (email: string, password: string) => {
  const router = useRouter();
  const login = useCallback(async () => {
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (result?.ok) router.push("/cart");
      return result;
    } catch (error: any) {
      console.log(error);
      return error;
    }
  }, [email, password, router]);

  return login;
};
