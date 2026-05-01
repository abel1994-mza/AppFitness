import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import PlansPreview from "../components/sections/PlansPreview";
import CTA from "../components/sections/CTA";
import Training from "./Training";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <CTA />
      <Training />
    </>
  );
};

export default Home;