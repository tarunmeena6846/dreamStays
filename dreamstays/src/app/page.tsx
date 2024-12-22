import Hero from "./components/Hero/hero";
import { About } from "./components/AboutUs/Index";
import { Service } from "./components/Services/Service";
import { Review } from "./components/Review/Review";
import MapEmbed from "./components/Map/Map";
import { Gallery } from "./components/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <About />
      <Service />
      <Review />
      <Gallery />
      <MapEmbed />
      <Footer />
    </div>
  );
}
