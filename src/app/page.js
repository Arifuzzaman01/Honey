import Animate from "@/components/Animate";
import Banner from "@/components/Banner";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import HoneyJar from "@/components/HoneyJar";
import HotLine from "@/components/HotLine";
import Knowledge from "@/components/Knowledge";
import OrderForm from "@/components/OrderForm";
import OrderNow from "@/components/OrderNow";
import Review from "@/components/Review";
import Video from "@/components/Video";
import WhyBye from "@/components/WhyBye";

export default function Home() {
  return (
    <div className=" max-w-7xl mx-auto   bg-[#ffffff] font-sans dark:bg-[#ffffff] overflow-hidden space-y-12 px-3 sm:px-5 lg:px-0">
      <Banner />
      <HotLine />
      <HoneyJar />
      <Animate />
      <Video />
      <Feature />
      <Knowledge />
      <OrderNow />
      <WhyBye />
      <OrderForm />
      <Review />
      <Footer />
    </div>
  );
}
