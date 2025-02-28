"use client";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"
import { useState } from "react";
import { registerUser } from "../../lib/apis/server";
import { useToast } from "@/hooks/use-toast"
import { ToastAction } from "@/components/ui/toast";

import { signUp } from "@/lib/auth-client";


const Defaul_Error = {
  error: false,
  message: "",
};

// keep this as the client component (functional component)
export default function RegisterForm() {
  const [error, setError] = useState(Defaul_Error);
  const [isLoading, setLoading] = useState(false);
  const { toast } = useToast()

  const handleSubmitForm = async (event) => {
    event?.preventDefault();
    const formData = new FormData(event?.currentTarget);
    const name = formData.get("name").toString();
    const email = formData.get("email").toString();
    const password = formData.get("password") ?? "";
    const confirmPassword = formData.get("confirm-password") ?? "";

    //console.log("submited", { name, email, password, confirmPassword });
    //if (name && email && password && confirmPassword ){
    if (password === confirmPassword) {
      setError(Defaul_Error);
      // setLoading(true);
      // const registerResp = await registerUser({ name, email, password });
      // setLoading(false);
      // if (registerResp?.error) {
      //   setError({ error: true, message: registerResp.error });
      // }else{
      //   toast({
      //     description: "Your message has been sent.",
      //   });
      
      // }
      const {data, error} = await signUp.email({
        email : email,
        password : password,
        name: name,
        image: undefined,
      },{
        onRequest:() =>{

        },
        onSuccess: (ctx) =>{
          console.log("onsuccess",ctx);
        },
        onError: (ctx) =>{
          
          if(ctx){
            setError({error:true, message:ctx.error.message});
          }
        },
      })
      if (data){
        console.log("data",data);
      }
    } else {
      setError({ error: true, message: "Password doesn't match" });
    }
    //}
    //console.log("Error ",error);
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="bg-blue-50/90 w-[350px]">
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your information to get started
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmitForm}>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Joen Doe" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Joen@example.com"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter a New Password"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  placeholder="Confirm your Password"
                />
              </div>
              <div className="flex justify-center">
                {error?.error && (
                  <span className="text-red-600 text-xs text-center">
                    {error.message}
                  </span>
                )}
              </div>
              <div className="flex justify-center gap-1 text-sm">
                Allready have an accoun ?{" "}
                <a href="/login" className="text-blue-500 hover:underline">
                  {" "}
                  Login
                </a>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button className="flex-1" type="submit" disabled={isLoading}>
            {isLoading && <Loader2 className="animate-spin" />}
              Register
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
