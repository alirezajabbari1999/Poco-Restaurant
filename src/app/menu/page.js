import React from "react";
import Footer from "@/src/components/modules/footer/Footer";
import Navbar from "@/src/components/modules/navbar/Navbar";
import BreadCrumb from "@/src/components/modules/breadCrumb/BreadCrumb";
import MenuContainer from "@/src/components/templates/menu/menuContainer/MenuContainer";

export default function page() {
  return (
    <>
      <Navbar />
      <BreadCrumb route="منو" />
      <MenuContainer />
      <Footer />
    </>
  );
}
