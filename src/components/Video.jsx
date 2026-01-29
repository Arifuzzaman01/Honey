import React from "react";

const Video = () => {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="relative w-full h-[70vh] overflow-hidden  shadow-lg aspect-video">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/uFjU5zFJx3E?rel=0&modestbranding=1&playsinline=1"
          title="Product Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Video;
