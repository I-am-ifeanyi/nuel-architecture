import React from "react";
import { GiHamburgerMenu, GiBeveledStar } from "react-icons/gi";
import { BsArrowUpRight } from "react-icons/bs";

const LandingPage = () => {
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-color5 font-bold text-xl">NuelC Studios</h1>
        <GiHamburgerMenu className="text-[30px]" />
      </div>
      <div className="mt-10">
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
          technology and innovations to satisfy your architectural needs. Please
          contact us to get started!
        </p>
        <div className="flex justify-around mt-10">
          <div className="transition ease-in-out duration-1000 bg-color5 rounded-xl w-1/2 mr-3 p-1 hover:bg-[#792815]">
            <h1 className="text-color1 text-center">Request a Project</h1>
          </div>
          <div className="border-2 border-color5 rounded-xl w-1/2 p-1">
            <h1 className="text-color5 text-center">Contact Us</h1>
          </div>
        </div>
        <a href="image1.png" target="_blank">
          <img src="image1.png" alt="" className="m-auto mt-10 rounded" />
        </a>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-color5 text-3xl">About NuelC</h1>
        <p className="text-xl mt-5 mb-5">
          We specialize in Architectural Planning, Designs and Real Estate
          offers.
        </p>
        <p>
          NuelC Studio is a company founded in 2015 by Architect Chinedu
          Emmanuel, which is specialized in architectural modelling of both
          commercial and private structures, Interior and exterior designs,
          buying and selling of real estate properties, consultations on
          construction works and so many others more...
        </p>
        <button className="mt-10 mb-5 w-1/2 rounded-xl text-color1 text-xl p-2 bg-color5">
          Read More
        </button>
        <a href="image2.png" target="_blank">
          <img src="image2.png" alt="" className="rounded m-auto" />
        </a>
      </div>
      <div className="mt-10">
        <h1 className="font-bold text-3xl text-color5 mb-5">Our Services</h1>
        <p className="flex items-center justify-between py-4 border-b-[1px] text-2xl mb-3">
          Free Consultation <BsArrowUpRight className="text-color5" />
        </p>
        <p className="flex items-center justify-between py-4 border-b-[1px] text-2xl mb-3">
          Architectural Design <BsArrowUpRight className="text-color5" />
        </p>
        <p className="flex items-center justify-between py-4 border-b-[1px] text-2xl mb-3">
          Real Estate <BsArrowUpRight className="text-color5" />
        </p>
        <p className="flex items-center justify-between py-4 border-b-[1px] text-2xl mb-3">
          Interior Design <BsArrowUpRight className="text-color5" />
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
          <h1 className="font-bold text-color5 text-3xl">
            See Our Latest Projects
          </h1>
          <ul className="mt-5 flex flex-col gap-5 font-bold text-xl">
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
          <div className="m-auto mt-5 mb-5 w-1/2 rounded-xl text-color1 text-center text-xl p-2 bg-color5">
            See More
          </div>
        </div>
        <div>
          <h1 className="font-bold text-color5 text-3xl">Benefits</h1>
          <ul className="mt-5 flex flex-col gap-5 font-bold text-xl">
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
        <div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
