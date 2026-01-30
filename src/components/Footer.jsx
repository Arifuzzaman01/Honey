import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="max-w-6xl mx-auto py-10 px-5">
        <div className="flex justify-between items-center pb-8 border-b border-gray-800">
          <p className="flex gap-5 font-semibold text-gray-700 ">
            <FaLocationDot size={26} /> <span>Kuril, Vatara, Dhaka-1229, Bangladesh</span>
          </p>
          <ul className="flex items-center gap-8 text-gray-800  font-semibold">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <p className="text-center mt-10 text-gray-600">
            © 2026 All Rights Reserved Designed by <span className="text-gray-900 font-semibold"> Funnel Liner</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
