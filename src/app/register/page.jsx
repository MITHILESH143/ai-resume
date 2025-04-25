"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import Link from "next/link";



const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });
  const [message, setMessage] = useState("");
const router = useRouter(); // Initialize useRouter
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        // Successful registration
        setMessage("Registration successful!");

        setFormData({
          username: "",
          email: "",
          password: ""
        });
        setTimeout(() => {
          router.push("/login"); // Redirect after 2 seconds
        }, 1000);
      } else {
        // Handle registration failure
        setMessage(data.message || "Registration failed.");
      }
    } catch (error) {
      // Catch and log errors
      console.error("Error:", error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={formData.username}
            className="w-full px-4 py-2 border rounded-md text-blue-800"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md text-blue-800"
            onChange={handleChange}
            value={formData.email}
            required />
        </div>
        <div>
          <label className="block font-semibold">Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="w-full px-4 py-2 border rounded-md text-blue-800"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Register
        </button>
        {message && <p className="mt-4 text-center text-sm text-red-500">{message}</p>}
        <p className="mt-4 text-center text-sm text-black-500">If Already have a Account {" "}<Link href="/login" className="text-blue-500 hover:underline">
                    Login
         </Link></p>
      </form>
    </div>
  );
};

export default Register;
