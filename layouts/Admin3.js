import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats3 from "components/Headers/HeaderStats3.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin3({ children }) {
  return (
    <>
      <Sidebar />
      <div className="absolute md:ml-64 mx-auto w-full bg-blueGray-100 top-0 bg-center bg-cover">
      
        {/* Header */}
        <HeaderStats3 />
        <div className=" mx-auto w-full -m-24">
          {children}
         
        </div>
      </div>
    </>
  );
}
