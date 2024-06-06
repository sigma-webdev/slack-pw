/* eslint-disable react/prop-types */
import { useRef, useEffect } from "react";
import airbnd from "../assets/airbnd.png";
import nasa from "../assets/nasa.png";
import uber from "../assets/uber.png";
import target from "../assets/target.png";
import nyt from "../assets/nyt.png";
import etsy from "../assets/etsy.png";
import { Link } from "react-router-dom";
import profile from "../assets/slackbot.png";

import myProfile from "../assets/myProfile.png";

import waveImage from "../assets/waving-hand.gif";

const HeroSection = ({ isAuth }) => {
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
    <>
      <div className="w-3/4 py-8 mx-auto text-center">
        {isAuth ? (
          <div className="flex items-center gap-5 py-2 2xl:py-10">
            <img src={waveImage} alt="wave hand" />
            <h1 className="py-2 text-2xl font-bold text-white md:text-5xl">
              Welcome
              <span className="text-[#451C4A]  ">Built for productivity</span>
            </h1>
          </div>
        ) : (
          <h1 className="py-4 text-2xl font-bold md:text-5xl">
            {" "}
            Made for People.{" "}
            <span className="text-[#451C4A]  ">Built for productivity</span>
          </h1>
        )}

        {isAuth ? (
          <>
            <section className="text-left 2xl:py-10">
              <p className="py-2 bg-[#ECDEEC] px-4 ">
                {" "}
                chats for example@gmail.com
              </p>
              <div className="flex items-center justify-between px-5 bg-white h-52">
                <div className="">
                  <div className="flex items-center px-2">
                    <img
                      className="pr-1"
                      src={myProfile}
                      width={90}
                      alt="profile image"
                    />
                    <div className="-space-x-6 avatar-group rtl:space-x-reverse">
                      <div className="avatar">
                        <div className="w-12">
                          <img src={profile} alt="profile image" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12 border">
                          <img src={myProfile} alt="profile image" />
                        </div>
                      </div>
                      <div className="avatar">
                        <div className="w-12">
                          <img src={profile} alt="profile image" />
                        </div>
                      </div>
                    </div>
                    <p className="pl-5"> 3 chats </p>
                  </div>
                </div>
                <button className="text-xl btn bg-[#621f69e8] text-white px-6 hover:bg-[#611F69] ">
                  {" "}
                  LAUNCH CHATS{" "}
                </button>
              </div>
            </section>
            <div className="py-8 text-white 2xl:py-14">
              <Link to={"/signin"} className="flex items-center justify-center">
                <p>
                  Not seeing your chats?
                  <span className="text-[#36C5F0] ml-2">
                    Try using a different email address
                  </span>
                </p>
                <svg
                  className="pt-1 ml-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#36C5F0"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.75 12C3.75 11.5858 4.08579 11.25 4.5 11.25L17.6893 11.25L12.2197 5.78033C11.9268 5.48744 11.9268 5.01256 12.2197 4.71967C12.5126 4.42678 12.9874 4.42678 13.2803 4.71967L20.0303 11.4697C20.3232 11.7626 20.3232 12.2374 20.0303 12.5303L13.2803 19.2803C12.9874 19.5732 12.5126 19.5732 12.2197 19.2803C11.9268 18.9874 11.9268 18.5126 12.2197 18.2197L17.6893 12.75L4.5 12.75C4.08579 12.75 3.75 12.4142 3.75 12Z"
                    fill="#36C5F0"
                  />
                </svg>
              </Link>
            </div>
          </>
        ) : (
          <>
            <Link
              to={"/signup"}
              className="font-semibold  btn px-10 h-14  text-white bg-[#562F5C] my-3 hover:bg-[#451c4a]"
            >
              {" "}
              GET STARTED
            </Link>
            <p className="py-2 mb-2">
              {" "}
              <span className="font-bold "> Slack if free to try</span> Slack if
              free to try for as long as you like{" "}
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
          </>
        )}
      </div>
    </>
  );
};

export default HeroSection;
