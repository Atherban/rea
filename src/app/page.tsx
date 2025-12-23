import NavHeader from "@/src/components/layout/NavHeader";
import Image from "next/image";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import ServicesOverview from "../components/sections/ServicesOverview";
import ProjectsOverview from "../components/sections/ProjectsOverview";
import AboutOverview from "../components/sections/AboutOverview";

export default function Home() {
  return (
    <div>
      <Hero/>
      <WhyChooseUs/>
      <ServicesOverview/>
      <ProjectsOverview/>
      <AboutOverview/>
    </div>
  );
}
