import React from "react";
import { FaCheckSquare, FaShoppingCart } from "react-icons/fa";

const OrderForm = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <h1 className="heading animated-text">
        তাই আর দেরি না করে আজই অর্ডার করুন
      </h1>
      <form className="flex flex-col md:flex-row gap-5 mt-10">
        <div className="flex-1">
          <div className="space-y-5">
            <h3 className="text-2xl font-bold mb-5 text-center">
              Billing Details
            </h3>
            <input
              type="text"
              placeholder="আপনার নাম লিখুন *"
              className="py-3 px-4  w-full border border-gray-300 rounded-xl"
            />
            <input
              type="number"
              placeholder="আপনার মোবাইল নাম্বার লিখুন *"
              className="py-3 px-4  w-full border border-gray-300 rounded-xl"
            />
            <input
              type="text"
              placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন *"
              className="py-3 px-4  w-full border border-gray-300 rounded-xl"
            />
          </div>
          <div className="w-fit pt-5 rounded-2xl bg-white mt-10 card-shadow">
            <h3 className="text-xl font-semibold text-center  mb-5">Payment</h3>
            <div className="mb-8">
              <p className="flex gap-3 items-center italic text-xl px-10 ">
                <FaCheckSquare size={24} className="fill-[#ffcb05]" />
                <span> ক্যাশ অন ডেলিভারি</span>
              </p>
            </div>
            <div className="bg-[#ffcb05] py-3.5 px-3 rounded-b-2xl relative">
              <p className="text-white font-semibold text-xl">
                Pay with cash on delivery.
              </p>
              <div className="bg-[#ffcb05] w-6 h-6 rotate-45 absolute left-1/3 -top-3 "></div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col   px-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Your order</h2>

          {/* Main Card */}
          <div className="w-full max-w-lg bg-white rounded-3xl border border-gray-200 shadow-sm overflow-hidden">
            {/* Table Header */}
            <div className="flex justify-between px-6 py-4 border-b border-gray-100">
              <span className="font-bold text-lg text-slate-800">Product</span>
              <span className="text-gray-500 font-medium">Subtotal</span>
            </div>

            {/* Product Row */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-orange-500 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-[10px] text-center p-1 font-bold">
                  Digital Marketing Masterclass
                </div>
                <span className="text-slate-700 font-medium leading-tight">
                  Digital Marketing Masterclass Course
                </span>
              </div>
              <div className="flex items-center gap-4">
                <div className="border rounded px-3 py-1 text-slate-600">1</div>
                <span className="font-medium text-slate-800">৳ 1,999</span>
              </div>
            </div>

            {/* Subtotal Row */}
            <div className="flex justify-between px-6 py-4 border-b border-gray-100">
              <span className="text-slate-700 font-medium text-lg">
                Subtotal
              </span>
              <span className="font-bold text-slate-800">1,690.00</span>
            </div>

            {/* Shipping Row */}
            <div className="flex justify-between px-6 py-6 border-b border-gray-100">
              <span className="text-slate-700 font-medium text-lg">
                Shipping
              </span>
              <div className="space-y-3">
                <label className="flex items-center justify-end gap-2 cursor-pointer">
                  <span className="text-sm text-slate-600">
                    Inside Dhaka : ৳ 00.00
                  </span>
                  <input
                    type="radio"
                    name="shipping"
                    className="w-4 h-4 text-blue-600"
                    defaultChecked
                  />
                </label>
                <label className="flex items-center justify-end gap-2 cursor-pointer">
                  <span className="text-sm text-slate-600">
                    Outside Dhaka : ৳ 00.00
                  </span>
                  <input
                    type="radio"
                    name="shipping"
                    className="w-4 h-4 text-blue-600"
                  />
                </label>
              </div>
            </div>

            {/* Total Row */}
            <div className="flex justify-between px-6 py-8">
              <span className="text-2xl font-bold text-slate-800">Total</span>
              <span className="text-2xl font-bold text-slate-800">
                1,690.00
              </span>
            </div>
          </div>

          {/* Order Button */}
          <button className="mt-6 w-full max-w-lg bg-[#ffcb05]  text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md">
            <FaShoppingCart size={20} />
            Place Order BDT 1,690.00
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
