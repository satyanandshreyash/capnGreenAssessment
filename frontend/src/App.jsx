import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
