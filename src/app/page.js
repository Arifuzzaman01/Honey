import Animate from "@/components/Animate";
import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import HoneyJar from "@/components/HoneyJar";
import HotLine from "@/components/HotLine";
import Knowledge from "@/components/Knowledge";
import OrderNow from "@/components/OrderNow";
import Video from "@/components/Video";

export default function Home() {
  return (
    <div className="   bg-white font-sans dark:bg-white overflow-hidden space-y-12 px-3 sm:px-5 lg:px-0">
      <Banner />
      <HotLine />
      <HoneyJar />
      <Animate />
      <Video />
      <Feature />
      <Knowledge />
      <OrderNow />
      <h1>abc</h1>

    </div>
  );
}
