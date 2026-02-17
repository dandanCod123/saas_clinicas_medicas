"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormControl, FormMessage } from "@/components/ui/form";
import { FormItem, FormLabel } from "@/components/ui/form";
import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import SignUpForm from "./components/sign-up-form";

// ESSE ESQUEMA FICA NORMAL
// const registerSchema = z.object({
//   name: z.string().trim().min(1, { message: "Nome é obrigatório" }),
//   email: z
//     .string()
//     .trim()
//     .min(1, { message: "E-mail é obrigatório" })
//     .email({ message: "E-mail inválido" }),
//   password: z
//     .string()
//     .trim()
//     .min(8, { message: "A senha deve ter pelo menos 8 caracteres" }),
// });

function AuthenticationPage() {
  // const form = useForm<z.infer<typeof registerSchema>>({
  //   resolver: zodResolver(registerSchema),
  //   defaultValues: {
  //     name: "",
  //     email: "",
  //     password: "",
  //   },
  // });

  // function onSubmit(values: z.infer<typeof registerSchema>) {
  //   console.log(values);
  //   // aqui você faria o fetch/axios/push para cadastro se quiser!
  // }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Criar conta</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Faça login para acessar sua clínica
              </CardDescription>
              <CardContent className="space-y-2"></CardContent>
              <CardFooter>
                <Button>Entrar</Button>
              </CardFooter>
            </CardHeader>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <SignUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default AuthenticationPage;
