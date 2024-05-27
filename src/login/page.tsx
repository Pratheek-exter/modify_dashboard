// frontend/lib/auth.js
"use client"
import { useState, useEffect, SetStateAction } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    if (username === "" || password === "") {
      setError("Username and password are required.");
    } else {
      try {
        const response = await axios.post("http://localhost:4000/api", {
          username,
          password,
        });
        if (response.data.token) {
          // Store the token in localStorage
          localStorage.setItem("token", response.data.token);
          router.push("/dashboard");
        } else {
          setError("An error occurred while logging in.");
        }
      } catch (error) {
        setError("An error occurred while logging in.");
      }
    }
  };

  const handlePasswordChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  };

  const handleUsernameChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setUsername(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-4">
          <Image
            src="/exter_name-logo.png"
            alt="logo"
            width={150}
            height={100}
            priority
          />
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          {error && <p className="text-red-500 text-xs italic">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
