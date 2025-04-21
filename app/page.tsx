import HeroSlideshow from "@/app/ui/index/hero-slideshow";
import About from "@/app/ui/index/about";
import Inspiration from "@/app/ui/index/inspiration";

import '../css/globals.css';

export default function Home() {
  return (
    <div className="min-h-screen overflow-auto scrollbar-hide">
      <HeroSlideshow />
      <About />
      <Inspiration />
    </div>
  );
}