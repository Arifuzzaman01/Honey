import Image from "next/image";
import React from "react";

const WhyBye = () => {
  return (
    <div
    
      style={{
        backgroundImage:
          "url('https://preview.funnelliner.xyz/_next/static/media/white_bg.d0467847.png')",
        backgroundSize: "const",
        backgroundPosition: "top",
        backgroundRepeat: "repeat-y",
      }} 
      className="pt-32 pb-20 relative"
    >
      <div className="max-w-6xl mx-auto">
        <div className=" w-2/3 mx-auto space-y-10 mb-20">
          <h1 className="heading">আমাদের থেকে কেন মধুময় বাদাম কিনবেন?</h1>
          <p className="text-4xl text-gray-600 leading-16 text-center">
            ফ্রি হোম ডেলিভারি সুবিধা। <br /> ১০০% অরিজিনাল মধু ক্যাশব্যাক গ্যারান্টি <br />
            প্রোডাক্ট হাতে পেয়ে কোয়ালিটি যাচাই করে পেমেন্ট করার  সুবিধা। <br /> আমরা
            সুন্নত তরিকায় ব্যবসা করি <br /> ফ্রি হেলথ টিপস ।
          </p>
        </div>
      </div>
      <div className="absolute left-0 top-1/2">
        <Image src={"https://preview.funnelliner.xyz/images/landing-10/honeyspoon.svg"} width={130} height={130} alt="abc" />
      </div>
      <div className="absolute bottom-0 right-32 upDown">
        <Image src={"https://preview.funnelliner.xyz/images/landing-10/bee3.svg"}  width={120} height={120} alt="bee in flower"/>
      </div>
    </div>
  );
};

export default WhyBye;
