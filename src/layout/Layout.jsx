import React from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
