import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/hooks";
import { Loader } from "lucide-react";
import toast from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();
  const { user, loading } = useUser();

  if (loading) {
    return (
      <div className="border rounded-lg p-4 shadow-md flex flex-col gap-4">
        <Loader className="animate-spin text-4xl" />
      </div>
    );
  }
  return (
    <div className="border rounded-lg p-4 shadow-md flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Profile Details</h1>
      <p className="text-lg">
        <b>Username</b>: {user.username}
      </p>
      <p className="text-lg">
        <b>Email</b>: {user.email}
      </p>
      <button
        className="border bg-red-700 p-2 text-white rounded-lg"
        onClick={() => {
          localStorage.removeItem("token");
          toast.success("Logged out successfully!");
          navigate("/signin");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
