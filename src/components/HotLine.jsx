import React from "react";

const HotLine = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div
        style={{
          backgroundImage:
            "url('https://preview.funnelliner.xyz/_next/static/media/hotline_bg.261a75d0.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          
        }}
        className="flex flex-col justify-center items-center gap-5 min-h-40 py-14"
      >
        <h3 className="text-[30px] text-[#f22512]  font-semibold">
          যে কোন প্রয়োজনে কল করুন
        </h3>
        <h2 className="text-4xl font-semibold text-[#f22512]">হটলাইন: <span className="text-5xl font-bold">01600-324567</span> </h2>
      </div>
    </div>
  );
};

export default HotLine;
