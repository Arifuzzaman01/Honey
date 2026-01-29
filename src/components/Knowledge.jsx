import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Knowledge = () => {
  return (
    <div>
      <div className="mt-5 max-w-6xl mx-auto">
        <div className="relative my-8">
          <h1 className="heading w-2/3 mx-auto">
            প্রতিদিন দুই চামচ মধুময় বাদাম আপনার উপকার করবে
          </h1>
          <Image
            src={"https://preview.funnelliner.xyz/images/landing-10/bee1.svg"}
            height={70}
            width={70}
            alt="bee"
            className="absolute right-10 sm:right-16 md:right-28 bottom-0"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 justify-between items-center my-5">
          <div className=" -ml-[100px] flex-2">
            <Image
              src={
                "https://preview.funnelliner.xyz/images/landing-10/honeyFeature.png"
              }
              width={500}
              height={500}
              alt="honey Bar"
            />
          </div>

          <div className="flex flex-col gap-7  flex-2">
            <div className="flex gap-2 items-center">
              <FaCheckCircle size={24} className="fill-[#fec827]" />
              <p className="text-xl text-gray-600 leading-9">
                মধু ভালো শক্তি প্রদানকারী খাদ্য। মধু দেহে তাপ ও শক্তি জুগিয়ে
                শরীরকে সুস্থ রাখে।
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaCheckCircle size={24} className="fill-[#fec827]" />
              <p className="text-xl text-gray-600 leading-9">
                মধুতে যে শর্করা থাকে তা সহজেই হজম হয়।
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaCheckCircle size={24} className="fill-[#fec827]" />
              <p className="text-xl text-gray-600 leading-9">
                হাঁপানি রোধে এবং ফুসফুসের যাবতীয় রোগ ও শ্বাসকষ্ট নিরাময়ে
                সহায়তাকারী।
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaCheckCircle size={24} className="fill-[#fec827]" />
              <p className="text-xl text-gray-600 leading-9">
                মধু অনিদ্রার ভালো ওষুধ। রাতে শোয়ার আগে এক গ্লাস পানির সঙ্গে দুই
                চা চামচ মধু মিশিয়ে খেলে এটি গভীর ঘুমে কাজ করে।
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <FaCheckCircle size={24} className="fill-[#fec827]" />
              <p className="text-xl text-gray-600 leading-9">
                মেয়েদের রূপচর্চার ক্ষেত্রে মাস্ক হিসেবে মধুর ব্যবহার বেশ
                জনপ্রিয়। মুখের ত্বকের মসৃণতা বৃদ্ধির জন্যও মধু ব্যবহৃত হয়।
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Knowledge;
