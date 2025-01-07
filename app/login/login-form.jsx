"use client";

import { useState } from "react";

//client component for CSR
export default function LoginForm() {
  const[email, setEmail]=useState("");  
  const[password, setPassword]=useState("");

  const handSubmit = (e)=>{
    e.preventDefault();
    console.log("Form Data :",{email:email,password:password});
  }
  return (
    <div className=" w-[380px] mx-auto ">
        <div className="bg-white shadow-md border-gray-200 rounded-lg p-4">
          <form onSubmit={handSubmit} className="space-y-6">
            <h3 className="text-xl font-semibold">Sign In</h3>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Enter Your Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="bg-gray-50 focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-900 ring-1 ring-offset-2 block w-full "
                placeholder=" Enter your Email Here"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Enter Your Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className="bg-gray-50 focus:outline-blue-500 focus:ring-2 focus:ring-blue-500 text-gray-900 ring-1 ring-offset-2 block w-full "
                placeholder=" Enter your Password Here"
              />
            </div>
            {/*remember me */}
            <div className="flex ">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember" className="font-medium text-gray-900 ms-1"> Remember me</label>
              <a href="/forget-password" className="ml-auto text-sm text-blue-500 hover:underline">Forget Password ?</a>
            </div>
            {/*sign in*/}
            <div>
              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5">Sign In</button>
            </div>
            {/* create account*/}
            <div className="text-sm font-medium text-gray-500 text-center">
              Doesn't have account yet?{" "}
              <a href="/register" className="ml-auto text-sm text-blue-500 hover:underline">Sign Up</a>
            </div>
          </form>
        </div>
      </div>
  )
}