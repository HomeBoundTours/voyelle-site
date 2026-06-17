import Hero from "@/components/sections/Hero";
import Promise from "@/components/sections/Promise";
import HowItWorks from "@/components/sections/HowItWorks";
import Packages from "@/components/sections/Packages";
import WhoWeServe from "@/components/sections/WhoWeServe";
import About from "@/components/sections/About";
import IntakeForm from "@/components/sections/IntakeForm";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Promise />
      <HowItWorks />
      <Packages />
      <WhoWeServe />
      <About />
      <IntakeForm />
      <FAQ />
    </>
  );
}
