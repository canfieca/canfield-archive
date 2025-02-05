import HeroSlideshow from "./components/index/hero-slideshow";
import About from "./components/index/about";

import './globals.css';

export default function Home() {
  return (
    <div className="min-h-screen overflow-auto scrollbar-hide">
      <HeroSlideshow />
      <About />
    </div>
  );
}


