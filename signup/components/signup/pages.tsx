"use client";
import axios from "axios";

import { useState } from "react";

export default function SignInComponents() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-[400px] p-8 bg-white rounded-2xl shadow-lg space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-500 mt-2">Please sign in to continue</p>
        </div>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="yourname@gmail.com"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-500"
            />
          </div>

          <button
            onClick={() => {
              axios.post("http://localhost3000/api/user", {
                email,
                password,
              });
            }}
            className="w-full bg-blue-500 text-white mt-2 py-3 rounded-lg hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-600">
          Dont have an account?
          <a href="/signup" className="text-blue-600 font-medium ml-1">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
