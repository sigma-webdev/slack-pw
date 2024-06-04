import { useRef, useEffect } from "react";
import airbnd from "../assets/airbnd.png";
import nasa from "../assets/nasa.png";
import uber from "../assets/uber.png";
import target from "../assets/target.png";
import nyt from "../assets/nyt.png";
import etsy from "../assets/etsy.png";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play video", error);
      });
    }
  }, []);

  return (
    <div className="w-3/4 py-8 mx-auto text-center">
      <h1 className="py-4 text-2xl font-bold md:text-5xl">
        {" "}
        Made for People.{" "}
        <span className="text-[#451C4A]  ">Built for productivity</span>
      </h1>
      <button className="font-semibold  btn px-10 h-14  text-white bg-[#562F5C] my-3 hover:bg-[#451c4a]">
        {" "}
        GET STARTED
      </button>
      <p className="py-2 mb-2">
        {" "}
        <span className="font-bold "> Slack if free to try</span> Slack if free
        to try for as long as you like{" "}
      </p>
      <div className="flex flex-wrap items-center py-5 mb-4 justify-evenly">
        <img className="w-20 " src={airbnd} alt="air bnb" />
        <img className="w-16" src={nasa} alt=" nasa" />
        <img className="w-16" src={uber} alt="uber" />
        <img className="w-12" src={target} alt="target" />
        <img className="w-36" src={nyt} alt="new york" />
        <img className="w-16" src={etsy} alt="etsy" />
      </div>
      <video
        autoPlay
        loop
        ref={videoRef}
        className="rounded-xl"
        src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.webm"
      ></video>
    </div>
  );
};

export default HeroSection;
