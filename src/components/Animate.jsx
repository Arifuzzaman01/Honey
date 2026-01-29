import Image from "next/image";
import React from "react";

const Animate = () => {
  return (
    <div className="relative mt-10">
      <div className="absolute left-0 upDown">
        <Image
          src={
            "https://preview.funnelliner.xyz/images/landing-10/honey_layer.svg"
          }
          width={150}
          height={100}
          alt="animate1"
        />
      </div>
      <div className="absolute right-0 upDown">
        <Image
          src={
            "https://preview.funnelliner.xyz/images/landing-10/honey_layer.svg"
          }
          width={150}
          height={100}
          alt="animate2"
          className="-scale-x-100"
        />
      </div>
      <div className="w-1/2 mx-auto flex flex-col items-center justify-center gap-10 pt-10 ">
        <button className="order-btn">অর্ডার করতে এখানে ক্লিক করুন</button>
        <p className="font-semibold text-xl text-center">
          আর নয় দুশ্চিন্তা, আপনার জন্য মধুময় বাদামই যথেষ্ঠ। ১০০% কার্যকরী ও
          পরীক্ষিত প্রডাক্ট।
        </p>
        
      </div>
    </div>
  );
};

export default Animate;
