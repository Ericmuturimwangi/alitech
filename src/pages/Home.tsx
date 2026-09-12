import Hero from "../components/Hero";
import Countdown from "../components/Countdown";
import About from "../components/About";
import WhatToExpect from "../components/WhatToExpect";
import WelcomeNote from "../components/WelcomeNote";
import VisionMission from "../components/VisionMission";
import Themes from "../components/Themes";
import Programme from "../components/Programme";
import Attendees from "../components/Attendees";
import Speakers from "../components/Speakers";
import Exhibit from "../components/Exhibit";
import Sponsors from "../components/Sponsors";
import Faq from "../components/Faq";
import Registration from "../components/Registration";

export default function Home() {
  return (
    <>
      <Hero />
      <Countdown />
      <About />
      <WhatToExpect />
      <WelcomeNote />
      <VisionMission />
      <Themes />
      <Programme />
      <Attendees />
      <Speakers />
      <Exhibit />
      <Sponsors />
      <Faq />
      <Registration />
    </>
  );
}
