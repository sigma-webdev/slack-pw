import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import ConfirmEmail from "./Pages/ConfirmEmail";
import Home from "./Pages/Home";
import Chat from "./Component/Chat";

function App() {
  return (
    <>
      <Routes>
        {/* route that does not require auth */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/confirmemail" element={<ConfirmEmail />} />

        {/* TODO: route for authenticated  */}
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
