import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  { id: 1, name: "Customer One", color: "bg-blue-400" },
  { id: 2, name: "Customer Two", color: "bg-yellow-400" },
  { id: 3, name: "Customer Three", color: "bg-red-400" },
  { id: 4, name: "Customer Four", color: "bg-blue-400" },
];

export default function Review() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      {/* Bengali Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-slate-900">
        আমাদের কাস্টমার রিভিউ
      </h2>

      {/* Responsive Grid: 1 col on mobile, 2 cols on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reviews.map((review) => (
          <div key={review.id} className="flex items-start gap-4 p-4">
            {/* Avatar Circle */}
            <div
              className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex-shrink-0 ${review.color} border-4 border-white shadow-sm flex items-center justify-center overflow-hidden`}
            >
              {/* Placeholder for Avatar Image */}
              <div className="w-full h-full bg-slate-200 animate-pulse " />
            </div>

            {/* Review Content */}
            <div className="flex-1 space-y-2">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={18} fill="#facc15" color="#facc15" />
                ))}
              </div>

              {/* Skeleton Lines to match image style */}
              <div className="flex flex-wrap gap-2">
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                <div className="h-3 bg-gray-100 rounded w-1/6"></div>
                <div className="h-3 bg-gray-200 rounded w-4/6 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-2/6"></div>
                <div className="h-3 bg-gray-100 rounded w-2/5 animate-pulse"></div>
                <div className="h-4 bg-gray-100 rounded w-1/5 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-3/5 animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
