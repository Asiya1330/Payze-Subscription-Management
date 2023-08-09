import React from "react";
import "../globals.css";
import Navbar from "@/components/general/navbar";
import Footer from "@/components/general/footer";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;
