import { Link } from "react-router-dom";
import Footer from "../Component/Footer";
import slackLogo from "../assets/slackLogo2.svg";
import { useState, useEffect, useCallback } from "react";

import mail from "../assets/mail.png";
import outlook from "../assets/outlook.png";

const ConfirmEmail = () => {
  const [otp, setOtp] = useState({
    firstChar: "",
    secondChar: "",
    thirdChar: "",
    fourthChar: "",
    fifthChar: "",
    sixChar: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const handleOtpChange = (event) => {
    const { name, value } = event.target;
    setOtp({
      ...otp,
      [name]: value,
    });
  };

  const validateOtp = useCallback(() => {
    if (
      otp.firstChar.length > 0 &&
      otp.secondChar.length > 0 &&
      otp.thirdChar.length > 0 &&
      otp.fourthChar.length > 0 &&
      otp.fifthChar.length > 0 &&
      otp.sixChar.length > 0
    ) {
      setLoading(true);
      const tempOtp = Object.values(otp).join("");
      console.log(tempOtp);
    } else {
      setLoading(false);
    }
    console.log("validFunction being called");
  }, [otp]);

  useEffect(() => {
    validateOtp();
  }, [otp, validateOtp]);

  return (
    <>
      <section className="w-3/4 mx-auto text-center py-14">
        <div className="">
          <Link to={"/"} className="">
            <img className="mx-auto " src={slackLogo} alt="home" width={100} />{" "}
          </Link>
          <h3 className="pb-2 mt-2 text-3xl font-semibold md:text-5xl">
            {" "}
            Check your email for a code
          </h3>
          <p>
            We have sent a 6-character code to
            <span className="font-bold"> example@email.com </span>. The code
            expires shortly, so please enter it soon.
          </p>
        </div>
        <div className="w-auto py-12 mx-auto">
          {/* six input box */}
          <input
            type="text"
            maxLength="1"
            name="firstChar"
            required
            onChange={handleOtpChange}
            className="w-10 h-10 text-center border border-black rounded md:h-16 md:w-14"
          />
          <input
            type="text"
            maxLength="1"
            name="secondChar"
            required
            onChange={handleOtpChange}
            className="w-10 h-10 text-center border border-black rounded md:h-16 md:w-14"
          />
          <input
            type="text"
            maxLength="1"
            name="thirdChar"
            required
            onChange={handleOtpChange}
            className="w-10 h-10 text-center border border-black rounded md:h-16 md:w-14"
          />
          <span className="mx-2 text-xl">-</span>
          <input
            type="text"
            maxLength="1"
            name="fourthChar"
            required
            onChange={handleOtpChange}
            className="w-10 h-10 text-center border border-black rounded md:h-16 md:w-14"
          />
          <input
            type="text"
            maxLength="1"
            name="fifthChar"
            required
            onChange={handleOtpChange}
            className="w-10 h-10 text-center border border-black rounded md:h-16 md:w-14"
          />
          <input
            type="text"
            maxLength="1"
            required
            name="sixChar"
            onChange={handleOtpChange}
            className="w-10 h-10 text-center border border-black rounded md:h-16 md:w-14"
          />
        </div>
        {loading && <p className="loading loading-spinner loading-md"></p>}

        {/* email container  */}
        <div className="flex justify-center gap-10 py-5 pt-16">
          <div className="flex items-center justify-center gap-2">
            <img src={mail} width={24} alt="Open Gmail" />
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank">
              {" "}
              Open Gmail
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img src={outlook} width={24} alt="Open Outlook" />
            <a href="https://outlook.live.com/mail/0/" target="_blank">
              {" "}
              Open Outlook
            </a>
          </div>
        </div>
        <p> Cant find your code? Check your spam folder!</p>
      </section>

      <Footer />
    </>
  );
};

export default ConfirmEmail;
