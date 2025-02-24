import HeroSlideshow from "../components/index/hero-slideshow";
import About from "../components/index/about";
import Inspiration from "../components/index/inspiration";

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