import Image from "next/image";
import React from "react";

const OrderNow = () => {
  return (
    <div className="relative">
        <div className="absolute beeAnimate top-1/2 left-1/3 -rotate-45 z-0">
        <Image src={"https://preview.funnelliner.xyz/images/landing-10/bee2.svg"} width={140} height={140} alt="Bee" />
      </div>
      <div className="absolute right-0">
        <Image src={"https://preview.funnelliner.xyz/images/landing-10/flower.svg"} width={100} height={100} alt="flower"/>
      </div>
      <div className="flex flex-col justify-center items-center gap-7 z-50">
        <button className="order-btn text-xl">
          অর্ডার করতে এখানে ক্লিক করুন
        </button>
        <h2 className="heading text-red-500 mt-4">মূল্য- ১০০০ টাকা</h2>
        <p className="font-bold text-2xl">সারা দেশে ফ্রি হোম ডেলিভারি</p>
      </div>
      
    </div>
  );
};

export default OrderNow;
