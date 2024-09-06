import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../pages/navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> {/* Renders the child routes */}
      </main>
    </div>
  );
}

export default Layout;
