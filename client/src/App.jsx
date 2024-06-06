import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import ConfirmEmail from "./Pages/ConfirmEmail";

function App() {
  return (
    <>
      <Routes>
        {/* route that does not require auth */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/confirmemail" element={<ConfirmEmail />} />
      </Routes>
    </>
  );
}

export default App;
