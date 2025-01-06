import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Backend_Url } from "../config";

const Signup = () => {
  const navigate = useNavigate();
  const [signupInputs, setSignupInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  async function signupRequest(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${Backend_Url}/signup`, signupInputs);
      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/");
      toast.success("Signup successful");
    } catch (err) {
      console.error(err);
      toast.error(err.response.data.message);
    }
  }

  return (
    <div className="border p-4 rounded-lg shadow-md flex flex-col gap-4 m-4 w-fit">
      <h1 className="text-2xl font-semibold text-center">Sign Up</h1>
      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-700 underline">
          Sign In
        </Link>
      </p>
      <form className="flex flex-col gap-4" onSubmit={signupRequest}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          className="p-2 text-lg outline-none border rounded-lg"
          onChange={(e) =>
            setSignupInputs({ ...signupInputs, username: e.target.value })
          }
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          className="p-2 text-lg outline-none border rounded-lg"
          onChange={(e) =>
            setSignupInputs({ ...signupInputs, email: e.target.value })
          }
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          className="p-2 text-lg outline-none border rounded-lg"
          onChange={(e) =>
            setSignupInputs({ ...signupInputs, password: e.target.value })
          }
        />
        <button
          type="submit"
          className="border bg-blue-700 p-2 text-white rounded-lg"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
