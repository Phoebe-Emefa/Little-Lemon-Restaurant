import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <main style={{ height: "100vh" }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
