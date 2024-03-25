import React from "react";
import BannerPng from "../assets/img2.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const About = ({ togglePlay }) => {
  const navigate = useNavigate(); // Get navigate function

  const handleGetStarted = () => {
    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="py-12 sm:py-0 relative">
      <div className="container min-h-[620px] flex items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
          {/* image section */}
          <div data-aos="fade-up" data-aos-once="false">
            <img src={BannerPng} alt="" className="w-full max-w-[400px]" />
          </div>
          {/* text content section */}
          <div className=" lg:pr-20 relative">
            <div className="relative z-10 space-y-5">
              <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-4xl font-semibold"
              >
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  Identify-Pro
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="500">
                "Identify Pro - Next Gen Face Detection" is an advanced facial recognition system designed to revolutionize the way facial recognition technology is used. With cutting-edge algorithms and state-of-the-art deep learning techniques, Identify Pro offers unparalleled accuracy and performance in detecting and recognizing faces in various scenarios.
              </p>
              <div className="flex gap-6">
                <button
                  data-aos="fade-up"
                  data-aos-delay="700"
                  className="primary-btn"
                  onClick={handleGetStarted} // Call handleGetStarted function on button click
                >
                  Get Started
                </button>
              </div>
            </div>
            {/* backgrond color blob */}
            <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute bottom-[-50px] left-[300px] blur-3xl opacity-50"></div>
            <div className="h-[100px] w-[100px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
