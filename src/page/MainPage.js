import React from "react";
import Navbar from "../components/home/Navbar";
import Main from "../components/home/Hero";
import Tabs from "../components/home/Tabs";
import Cards from "../components/home/Cards";
import Footer from "../components/home/Footer";

function MainPage() {
  return (
    <>
      <Navbar />
      <Main />
      <Tabs />
      <Cards />
      <Footer />
    </>
  );
}

export default MainPage;
