import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

import SignUpForm from "./components/sign-up-form";
import LoginForm from "./components/login-form";
import ImageSlider from "./components/image-slider";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const AuthenticationPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex h-screen w-screen gap-4 p-4">
      {/* Coluna esquerda - Formulário */}
      <div className="flex w-full flex-col items-center justify-center lg:w-1/2">
        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <Image
            src="/Logo.svg"
            alt="dr.agenda logo"
            width={200}
            height={200}
          />
        </div>

        {/* Tabs */}
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Criar conta</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginForm />
          </TabsContent>
          <TabsContent value="register">
            <SignUpForm />
          </TabsContent>
        </Tabs>
      </div>

      {/* Coluna direita - Slider */}
      <div className="relative hidden lg:block lg:w-1/2">
        <ImageSlider />
      </div>
    </div>
  );
};

export default AuthenticationPage;
