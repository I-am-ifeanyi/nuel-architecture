import React from "react";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  BsFacebook,
  BsInstagram,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import { MdOutlineMail, MdLightMode, MdDarkMode } from "react-icons/md";
import { SiUpwork } from "react-icons/si";

const Footer = ({lightDark, toggle}) => {
  
 

  const style1 = {
    backgroundColor: "red",
    padding: "2px",
    borderRadius: "15px",
    width: "25px",
    height: "20px",
    marginTop: "-3px",
  };
  const style2 = {
    backgroundColor: "white",
    padding: "2px",
    borderRadius: "15px",
    width: "25px",
    height: "20px",
    float: "right",
    marginTop: "-3px",
  };

  return (
    <>
      <div className={`${lightDark ? 'bg-color5' : 'bg-[#121212]'} w-full text-color1 mt-10 px-5 pt-5 pb-10`}>
        <h1 className="underline">NuelC Studios</h1>
        <ul className="text-sm my-5 flex flex-col gap-3">
          <li>Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Hire Us</li>
        </ul>
        <h1 className="underline">Our Socials</h1>
        <ul className="flex my-3 gap-8">
          <a href="https://wa.me/+2348135362422" target="_blank">
            <FaWhatsapp />
          </a>
          <a href="https://www.facebook.com/Nuelic" target="_blank">
            <BsFacebook />
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?i=8loudca0xep4&utm_content=1l60h3h"
            target="_blank"
          >
            <BsInstagram />
          </a>

          <a
            href="https://www.upwork.com/freelancers/~01c6d2d5ed93f5e5f7"
            target="_blank"
          >
            <SiUpwork />
          </a>
        </ul>
        <h1 className="underline mt-2">Contact Us:</h1>
        <div className="text-sm">
          <a
            href="mailto:el.studio.zee@gmail.com"
            className="flex items-center gap-2 my-2"
          >
            {" "}
            <MdOutlineMail /> el.studio.zee@gmail.com{" "}
          </a>
          <a href="tel:+2348063611278" className="flex items-center gap-2">
            <BsFillTelephoneOutboundFill /> +2348063611278
          </a>
        </div>

        <h1 className="mt-28 mb-2 text-sm flex items-center gap-1">
          {" "}
          {lightDark ? <MdDarkMode className="text-2xl text-color3"/> : <MdLightMode className="text-2xl"  />}{" "}
          {lightDark ? "Dark Mode" : "Light Mode"}
        </h1>
        <div
          className={`${
            lightDark ? "bg-color4" : "bg-[red]"
          } border border-spacing-4 border-2 w-1/6 h-[25px] rounded-2xl relative p-1`}
          onClick={toggle}
        >
          <div style={lightDark ? style1 : style2}></div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#FF5733] w-full p-3 text-color1 text-[10px]">
        <p>NuelC Studios &copy; 2022 all rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
