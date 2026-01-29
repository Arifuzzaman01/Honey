import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://preview.funnelliner.xyz/_next/static/media/bg_honey.fce02481.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "auto",
        width: "100vw",
      }}
      className="w-screen "
    >
      <div className="max-w-6xl mx-auto pt-6 pb-16 px-4">
        <div className="cursor-pointer ml-2">
          <Image
            src={
              "https://preview.funnelliner.xyz/_next/static/media/logo9.d342680c.svg"
            }
            height={130}
            width={240}
            alt="logo"
          />
        </div>
        <div>
          <h1 className="font-semibold text-6xl text-white w-2/3 text-justify mt-10 leading-20">
            <span className="text-[#fec827] ">পুষ্টিগুণ বৃদ্ধি </span> মধুময়
            বাদাম সেবনে অসংখ্য রোগবালাই থেকে পরিত্রাণ পাওয়া যায়
          </h1>
          <h3 className="text-[#a8de63] text-4xl font-semibold line-through my-5">
            পূর্বের মূল্য: ১০৫০ টাকা
          </h3>
          <h2 className="text-[#f22512] font-semibold text-[52px] my-5">
            মূল্য: ১০০০ টাকা
          </h2>
         <Link href={"#"}>
          <button className="flex gap-4 text-[20px] font-semibold items-center order-btn">
            <IoCartOutline size={28} className="font-bold"/> অর্ডার করুন
          </button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
