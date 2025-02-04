import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import ScrollToTop from "./components/ScrollToTop";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import TermsOfUse from "./components/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy";
import WhatWeOffer from "./components/WhatWeOffer";
import WhoDoWeServe from "./components/WhoDoWeServe";
import Empowering from "./components/Empowering";

export default function App() {
  return (
    <MantineProvider>
      {
        <Router>
          <ScrollToTop />
          <div className="max-w-[1440px] mx-auto">
            <Nav />

            <Routes>
              <Route path="" element={<LandingPage />} />
              <Route path="home" element={<LandingPage />} />
              <Route path="what-we-offer" element={<WhatWeOffer />} />
              <Route path="who-do-we-serve" element={<WhoDoWeServe />} />
              <Route path="features" element={<Empowering />} />
              <Route path="terms-of-use" element={<TermsOfUse />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            <Faq />
            <Footer />
          </div>
        </Router>
      }
    </MantineProvider>
  );
}
