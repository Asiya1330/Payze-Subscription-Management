import React from "react";
import "../globals.css";
import Navbar from "@/components/general/navbar";
import Footer from "@/components/general/footer";
import { UserProvider } from "@/context/auth";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <UserProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    </>
  );
};

export default App;
