import React from "react";
import Footer from "./Footer.jsx";
import { GiHamburgerMenu, GiBeveledStar } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";

const LandingPage = ({ lightDark, toggle }) => {
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between">
          <h1
            className={`${
              lightDark ? "text-color5" : "text-color1"
            } font-bold text-xl`}
          >
            NuelC Studios
          </h1>
          <nav className="hidden md:flex justify-between border w-[70%]">
          <ul className="flex gap-10">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <h1 className="ml-auto">Hire Us</h1>
          </nav>
          <GiHamburgerMenu
            className={`${
              lightDark ? "text-color2" : "text-color1"
            } text-[30px] text-color1 md:hidden`}
          />
        </div>
        <div className={`${lightDark ? "text-color2" : "text-color1"} mt-20`}>
          <h1 className="text-2xl font-bold">
            We Help You actualize Your Dream{" "}
            <>
              <p className="inline">Home!</p>
              <img src="line.png" alt="" className="ml-[70px] w-[100px]" />
            </>
          </h1>
          <p className="mt-5 ">
            We offer the best services in architectural designs, real estate,
            construction, Interior and exterior designs. We employ latest
            technology and innovations to satisfy your architectural needs.
            Please contact us to get started!
          </p>
          <div className="flex justify-around mt-10">
            <div className="transition ease-in-out duration-1000 bg-color5 rounded-xl w-1/2 mr-3 p-1 hover:bg-[#792815]">
              <h1 className="text-color1 text-center">Request a Project</h1>
            </div>
            <div className="border-2 border-color5 rounded-xl w-1/2 p-1">
              <h1
                className={`${
                  lightDark ? "text-color5" : "text-color1"
                }  text-center`}
              >
                Contact Us
              </h1>
            </div>
          </div>
          <a href="image1.png" target="_blank" rel="noreferrer">
            <img src="image1.png" alt="" className="m-auto mt-10 rounded" />
          </a>
        </div>
        <div className="mt-10">
          <h1
            className={`${
              lightDark ? "text-color5" : "text-color1"
            } font-bold text-3xl`}
          >
            About NuelC
          </h1>
          <p
            className={`${
              lightDark ? "text-color2" : "text-color1"
            } text-md mt-5 mb-5 `}
          >
            We specialize in Architectural Planning, Designs and Real Estate
            offers.
          </p>
          <p className={`${lightDark ? "text-color2" : "text-color1"} text-sm`}>
            NuelC Studio is a company founded in 2015 by Architect Chinedu
            Emmanuel, which is specialized in architectural modelling of both
            commercial and private structures, Interior and exterior designs,
            buying and selling of real estate properties, consultations on
            construction works and so many others more...
          </p>
          <button className="mt-10 mb-5 w-[140px] rounded-xl text-color1 text-md p-1 bg-color5">
            Read More
          </button>
          <a href="image2.png" target="_blank" rel="noreferrer">
            <img src="image2.png" alt="" className="rounded m-auto" />
          </a>
        </div>
        <div className="mt-10">
          <h1
            className={`font-bold text-2xl ${
              lightDark ? "text-color5" : "text-color1"
            } mb-5`}
          >
            Our Services
          </h1>
          <p
            className={`${
              lightDark ? "" : "text-color1"
            } flex items-center justify-between py-4 border-b-[1px] text-md mb-3`}
          >
            Free Consultation <BsArrowUpRight />
          </p>
          <p
            className={`${
              lightDark ? "" : "text-color1"
            } flex items-center justify-between py-4 border-b-[1px] text-md mb-3`}
          >
            Architectural Design <BsArrowUpRight />
          </p>
          <p
            className={`${
              lightDark ? "" : "text-color1"
            } flex items-center justify-between py-4 border-b-[1px] text-md mb-3`}
          >
            Real Estate <BsArrowUpRight />
          </p>
          <p
            className={`${
              lightDark ? "" : "text-color1"
            } flex items-center justify-between py-4 border-b-[1px] text-md mb-3`}
          >
            Interior Design <BsArrowUpRight />
          </p>
        </div>
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-3 gap-2">
            <div className="rounded  w-full">
              <a href="image4.jpg" target="_blank" rel="noreferrer">
                <img src="image4.jpg" alt="" />
              </a>
            </div>
            <div className="rounded  w-full col-span-2 row-span-2">
              <a href="image6.jpg" target="_blank" rel="noreferrer">
                <img src="image6.jpg" alt="" />
              </a>
            </div>
            <div className="rounded  w-full ">
              <a href="image3.jpg" target="_blank" rel="noreferrer">
                <img src="image3.jpg" alt="" />
              </a>
            </div>
            <div className="rounded  w-full col-span-2">
              <a href="image5.jpg" target="_blank" rel="noreferrer">
                <img src="image5.jpg" alt="" />
              </a>
            </div>
            <div className="rounded  w-full">
              <a href="image6.jpg" target="_blank" rel="noreferrer">
                <img src="image6.jpg" alt="" />
              </a>
            </div>
          </div>
          <div className="mt-10">
            <h1
              className={`font-bold ${
                lightDark ? "text-color5" : "text-color1"
              } text-2xl`}
            >
              Our Latest Projects
            </h1>
            <ul
              className={`${
                lightDark ? "" : "text-color1"
              } mt-5 flex flex-col gap-5 text-md`}
            >
              <li>Interior Design</li>
              <li>Architectural Design</li>
              <li>Real Estate</li>
              <li>3D Visualization</li>
            </ul>
            <iframe  src="https://www.youtube.com/embed/MRqZutLJErA" title="3D Animation" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="w-full h-60 mt-5"></iframe>
            <div className="flex flex-col gap-5 mt-10">
              <a href="image7.jpg" target="_blank" rel="noreferrer">
                <img src="image7.jpg" alt="" />
              </a>
              <a href="image8.jpg" target="_blank" rel="noreferrer">
                <img src="image8.jpg" alt="" />
              </a>
              <a href="image9.jpg" target="_blank" rel="noreferrer">
                <img src="image9.jpg" alt="" />
              </a>
            </div>
            <div className="m-auto mt-5 mb-5 w-[140px] rounded-xl text-color1 text-center text-md p-1 bg-color5">
              View more
            </div>
          </div>
          <div className={`${lightDark ? "" : "text-color1"}`}>
            <h1
              className={`${
                lightDark ? "text-color5" : "text-color1"
              } font-bold text-2xl`}
            >
              Benefits
            </h1>
            <ul className="mt-5 flex flex-col gap-5 text-md">
              <li className="flex items-center gap-5">
                {" "}
                <GiBeveledStar />
                Trust
              </li>
              <li className="flex items-center gap-5">
                {" "}
                <GiBeveledStar /> Best design as an investment
              </li>
              <li className="flex items-center gap-5">
                {" "}
                <GiBeveledStar /> Affordable for any budget
              </li>
              <li className="flex items-center gap-5">
                {" "}
                <GiBeveledStar /> Timely delivery
              </li>
            </ul>
          </div>
          <div className="mt-10 shadow p-1">
            <img src="image10.jpg" alt="" className="w-4/5" />
            <img
              src="image11.jpg"
              alt=""
              className="w-2/3 ml-[auto] mt-[-30px] "
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1
              className={`font-bold ${
                lightDark ? "text-color5" : "text-color1"
              } text-2xl my-5`}
            >
              Our Upwork Reviews
            </h1>
            <div className={`flex items-center p-3 border gap-5 ${lightDark ? "" : "text-color1"} ${lightDark ? "bg-color1" : "bg-[#121212]"}`}>
              <div>
                <a
                  href="https://www.upwork.com/freelancers/~01c6d2d5ed93f5e5f7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1 className="font-bold text-md mb-3">
                    Project: Mama's Roll
                  </h1>
                  <p>
                    "Michael was very responsive throughout the entire process.
                    His attention to details is superb. I am surprised by his
                    customer service and his professionalism. More importantly,
                    he cares about the project. Thank you for your work and I
                    would one hundred percent recommend Michael for your next
                    project."
                  </p>
                </a>
              </div>
            </div>
            <div className={`flex items-center border p-3 gap-5 ${lightDark ? "" : "text-color1"} ${lightDark ? "bg-color1" : "bg-[#121212]"}`}>
              <div>
                <a
                  href="https://www.upwork.com/freelancers/~01c6d2d5ed93f5e5f7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1 className="font-bold text-md mb-3">
                    Project: Redrawing House Plans
                  </h1>
                  <p>
                    "Did all that was asked and required. Would definitely
                    recommend"
                  </p>
                </a>
              </div>
            </div>
            <div className={`flex items-center border p-3 gap-5 ${lightDark ? "" : "text-color1"} ${lightDark ? "bg-color1" : "bg-[#121212]"}`}>
              <div>
              <a
                  href="https://www.upwork.com/freelancers/~01c6d2d5ed93f5e5f7"
                  target="_blank"
                  rel="noreferrer"
                >
              <h1 className="font-bold text-md mb-3">
                    Project: Home Remodel + Additional Floor Plans
                  </h1>
                <p>
                "Michael was great to work with. He completed the job ahead of schedule, was quick to respond to messages, and took care of everything we needed. Would work with him again!"


                </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer lightDark={lightDark} toggle={toggle} />
    </>
  );
};

export default LandingPage;
