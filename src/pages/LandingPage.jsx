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
          <GiHamburgerMenu
            className={`${
              lightDark ? "text-color2" : "text-color1"
            } text-[30px] text-color1`}
          />
        </div>
        <div className={`${lightDark ? "text-color2" : "text-color1"} mt-10`}>
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
            <div className="transition ease-in-out duration-1000 bg-color5 rounded-xl w-[140px] mr-3 p-1 hover:bg-[#792815]">
              <h1 className="text-color1 text-center">Request a Project</h1>
            </div>
            <div className="border-2 border-color5 rounded-xl w-[140px] p-1">
              <h1
                className={`${
                  lightDark ? "text-color5" : "text-color1"
                }  text-center`}
              >
                Contact Us
              </h1>
            </div>
          </div>
          <a href="image1.png" target="_blank">
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
          <a href="image2.png" target="_blank">
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
              <a href="image4.jpg" target="_blank">
                <img src="image4.jpg" alt="" />
              </a>
            </div>
            <div className="rounded  w-full col-span-2 row-span-2">
              <a href="image6.jpg" target="_blank">
                <img src="image6.jpg" alt="" />
              </a>
            </div>
            <div className="rounded  w-full ">
              <a href="image3.jpg" target="_blank">
                <img src="image3.jpg" alt="" />
              </a>
            </div>
            <div className="rounded  w-full col-span-2">
              <a href="image5.jpg" target="_blank">
                <img src="image5.jpg" alt="" />
              </a>
            </div>
            <div className="rounded  w-full">
              <a href="image6.jpg" target="_blank">
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
            <div className="flex flex-col gap-5 mt-10">
              <a href="image7.jpg" target="_blank">
                <img src="image7.jpg" alt="" />
              </a>
              <a href="image8.jpg" target="_blank">
                <img src="image8.jpg" alt="" />
              </a>
              <a href="image9.jpg" target="_blank">
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
              Our Reviews
            </h1>
            <div className="flex items-center p-3 gap-5 bg-color1">
              <img
                src="Face_passport.jpeg"
                alt=""
                className="w-1/3 h-1/3 rounded-[50%]"
              />
              <div>
                <h1 className="font-bold text-2xl my-2">Chiedu Nweke</h1>
                <h2 className="font-bold text-md">Architect | Engineer</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 gap-5 bg-color1">
              <img
                src="Face_passport.jpeg"
                alt=""
                className="w-1/3 h-1/3 rounded-[50%]"
              />
              <div>
                <h1 className="font-bold text-2xl my-2">Chiedu Nweke</h1>
                <h2 className="font-bold text-md">Architect | Engineer</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 gap-5 bg-color1">
              <img
                src="Face_passport.jpeg"
                alt=""
                className="w-1/3 h-1/3 rounded-[50%]"
              />
              <div>
                <h1 className="font-bold text-2xl my-2">Chiedu Nweke</h1>
                <h2 className="font-bold text-md">Architect | Engineer</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
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
