"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ correct import for app directory
import Link from "next/link";

export default function Login() {
  const router = useRouter(); // ✅ initialize here

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        console.log("Login successful:", data.message);
        setMessage(data.message);
        setFormData({
          email: "",
          password: ""
        });

        setTimeout(() => {
          router.push("/"); // ✅ will now work properly
        }, 1000);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              value={formData.email}
              placeholder="Enter your email"
              required />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              onChange={handleChange}
              value={formData.password}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-200"
          >
            Login
          </button>
          <p className="text-sm text-center text-red-600 mt-4">
           {message}
          </p>
          <p className="text-sm text-center text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="text-blue-500 hover:underline">
              Register here
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}
