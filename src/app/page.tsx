import HeroSection from "../components/sections/HeroSection";
import AboutUs from "../components/sections/AboutUs";
import Services from "../components/sections/Services";
import Testimonials from "../components/sections/Testimonials";
import SocialPostsSection from "../components/sections/SocialMedia";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo/logob.svg" />
      </Head>
      <HeroSection />
      <AboutUs />
      <Services />
      <Testimonials />
      <SocialPostsSection />
    </>
  );
}
