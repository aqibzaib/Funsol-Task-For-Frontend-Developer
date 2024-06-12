import React from "react";
import SideBar from "../components/creations/SideBar";
import RightSideBar from "../components/creations/RightSideBar";
import CreationMain from "../components/creations/CreationMain";
import Header from "../components/creations/Header";

const CreationsPage = () => {
  return (
    <div>
      <Header />
   <div className="flex justify-between gap-[0px]">
   <SideBar />
      <CreationMain />
      <RightSideBar />
   </div>
    </div>
  );
};

export default CreationsPage;
