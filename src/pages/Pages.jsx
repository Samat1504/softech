import React, {useEffect} from 'react';
import Main from "../components/main/Main";
import OurMission from "../components/outMission/OurMission";
import Services from "../components/services/Services";
import Projects from "../components/projects/Projects";
import AboutUs from "../components/aboutUs/AboutUs";
import Contact from "../components/contacts/Contact";
import {useTranslation} from "react-i18next";

function Pages() {
  const {t, i18n} = useTranslation();

  useEffect(() => {
    i18n.changeLanguage("en");
  }, []);

  return (
    <>
      <Main />
      <OurMission />
      <Services />
      <Projects />
      <AboutUs />
      <Contact />
    </>
  );
}

export default Pages;