import React from "react";
import HeroPng from "../assets/home.webp";
import { PiFaceMask } from "react-icons/pi";
import { BsGenderMale } from "react-icons/bs";
import { FaFaceGrin } from "react-icons/fa6";
import BannerPng from "../assets/home4.png";
import { useNavigate } from "react-router-dom";  

const FeaturesData = [
  {
    name: "Mask Detection",
    icon: (
      <PiFaceMask className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description:
      "Swiftly identifies whether individuals are wearing masks in public spaces, aiding in enforcing safety protocols and mitigating the spread of infectious diseases. It utilizes image processing and AI algorithms to discern the presence or absence of masks with high accuracy.",
    aosDelay: "300",
  },
  {
    name: "Age and Gender Detection",
    icon: (
      <BsGenderMale className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    description:
      "Rapidly analyzes facial features to estimate a person's age and determine their gender, facilitating demographic insights and personalized interactions in various contexts such as marketing, security, and healthcare. It employs machine learning algorithms to infer age and gender attributes with precision, enabling tailored experiences and efficient decision-making.",
    aosDelay: "500",
  },
  {
    name: "Expression Detection",
    icon: (
      <FaFaceGrin className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description:
      "Sophisticated image analysis techniques to recognize and interpret facial expressions, accurately discerning emotions such as happiness, sadness, anger, and surprise. Leveraging deep learning models, it provides valuable insights for applications in fields like marketing, user experience design, and mental health, enabling tailored responses and enhanced understanding of human behavior.",
    aosDelay: "700",
  },
];
const Home = ({ togglePlay }) => {
  const navigate = useNavigate(); // Get navigate function

  const handleGetStarted = () => {
    // Redirect to login page
    navigate("/login");
  };
  return (
    <>
      <div className="py-12 sm:py-0 dark:bg-black dark:text-white duration-300 overflow-hidden">
        <div className="container min-h-[700px] flex relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center relative z-10">
            {/* hero text section */}
            <div className="order-2 sm:order-1 space-y-5 lg:pr-20 relative z-30">
              <h1 data-aos="fade-up" data className="text-4xl font-semibold">
                IDENTIFY PRO :{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                  NEXT-GEN FACE DETECTION
                </span>
              </h1>
              <p data-aos="fade-up" data-aos-delay="300">
                Advanced facial recognition system leveraging cutting-edge
                technology to accurately detect and identify individuals in
                real-time.
              </p>
            </div>
            {/* image section */}
            <div
              data-aos="fade-up"
              data-aos-offset="0"
              className="order-1 sm:order-2"
            >
              <img src={HeroPng} alt="" className="" />
            </div>
          </div>

          {/* Animated Blob */}
          <div className="h-[300px] w-[300px] bg-gradient-to-r from-primary to-secondary rounded-full absolute top-0 left-0 blur-3xl animated-wrapper"></div>
        </div>
      </div>
      <div className="container py-14 sm:min-h-[600px]">
        <div>
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold text-center sm:text-4xl mb-12"
          >
            Key Features
          </h1>

          {/* card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {FeaturesData.map((data, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                className="text-center group space-y-3 sm:space-y-6 p-4 sm:py-10 bg-dark hover:bg-gradient-to-r from-primary to-secondary hover:shadow-[0_0_40px_#007cfff0] text-white hover:text-black rounded-lg duration-300"
              >
                <div className="grid place-items-center"> {data.icon}</div>
                <h1 className="text-2xl">{data.name}</h1>
                <p>{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
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
                  How does it {" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    Work
                  </span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="500">
                  "IDENTIFY PRO: NEXT-GEN FACE DETECTION employs
                  state-of-the-art deep learning algorithms, typically
                  convolutional neural networks (CNNs), trained on vast datasets
                  of facial images. These networks learn to detect facial
                  features and patterns at various levels of abstraction,
                  enabling robust recognition and identification.
                </p>
                <div className="flex gap-6">
                  <button
                    data-aos="fade-up"
                    data-aos-delay="700"
                    className="primary-btn"
                    onClick={handleGetStarted}
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
    </>
  );
};

export default Home;
