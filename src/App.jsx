import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import Hero from "./components/Hero";
import WhatWeOffer from "./components/WhatWeOffer";
import WhoDoWeServe from "./components/WhoDoWeServe";
import Empowering from "./components/Empowering";
import TheMovement from "./components/TheMovement";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function App() {
  return (
    <MantineProvider>
      {
        <div>
          <Nav />
          <Hero />
          <WhatWeOffer />
          <WhoDoWeServe />
          <Empowering />
          <TheMovement />
          <Faq />
          <Footer />
        </div>
      }
    </MantineProvider>
  );
}
