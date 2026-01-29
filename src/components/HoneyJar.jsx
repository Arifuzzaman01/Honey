import Image from "next/image";
import React from "react";

const HoneyJar = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 justify-between items-center">
      <Image
        src={"https://preview.funnelliner.xyz/images/landing-10/jar1.png"}
        width={350}
        height={350}
        alt="Honey Jar-1"
        className="w-full"
      />

      <Image
        src={"https://preview.funnelliner.xyz/images/landing-10/jar2.png"}
        width={350}
        height={350}
        alt="Honey Jar-2"
        className="w-full"
      />

      <Image
        src={"https://preview.funnelliner.xyz/images/landing-10/jar3.png"}
        width={350}
        height={350}
        alt="Honey Jar-3"
        className="w-full"
      />

      <Image
        src={"https://preview.funnelliner.xyz/images/landing-10/jar4.png"}
        width={350}
        height={350}
        alt="Honey Jar-4"
        className="w-full"
      />
    </div>
  );
};

export default HoneyJar;
