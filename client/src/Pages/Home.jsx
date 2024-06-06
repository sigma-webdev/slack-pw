import { useState, useEffect } from "react";
import Layout from "../Layout/Layout";
import HeroSection from "./HeroSection";
import NavBar from "./NavBar";
import Footer from "../Component/Footer";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [isAuth, setIsAuth] = useState(true);
  console.log(isAuth);

  // useEffect(() => {}, []);

  const toggle = () => {
    setIsAuth((prevState) => !prevState);
  };

  return (
    <Layout isAuth={isAuth}>
      <NavBar isAuth={isAuth} />
      <HeroSection isAuth={isAuth} />
      <div className="flex justify-center">
        <button className="text-gray-400" onClick={toggle}>
          loginMode
        </button>
      </div>

      <Footer />
    </Layout>
  );
};

export default Home;
