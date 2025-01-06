import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Backend_Url } from "../config";

const Signin = () => {
  const navigate = useNavigate();
  const [signinInputs, setSignInInputs] = useState({
    email: "",
    password: "",
  });

  async function signInRequest(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${Backend_Url}/signin`, signinInputs);
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/");
      toast.success("Signin successful");
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
    }
  }

  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col gap-4 m-4 w-fit">
      <h1 className="text-2xl font-semibold text-center">Sign In</h1>
      <p className="text-sm text-center text-gray-600">
        Don't have an account?{" "}
        <Link to="/signup" className="text-blue-700 underline">
          Sign Up
        </Link>
      </p>
      <form className="flex flex-col gap-4" onSubmit={signInRequest}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          className="p-2 text-lg outline-none border rounded-lg"
          onChange={(e) =>
            setSignInInputs({ ...signinInputs, email: e.target.value })
          }
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          className="p-2 text-lg outline-none border rounded-lg"
          onChange={(e) =>
            setSignInInputs({ ...signinInputs, password: e.target.value })
          }
        />
        <button
          type="submit"
          className="border bg-blue-700 p-2 text-white rounded-lg"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Signin;
