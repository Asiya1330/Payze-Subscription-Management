import React from "react";
import "../globals.css";
import Navbar from "@/components/general/navbar";
import Footer from "@/components/general/footer";
import { UserProvider } from "@/context/auth";
import { ToastContainer } from "react-toastify";
import { SubscriptionProvider } from "@/context/subscription";
import { PackageProvider } from "@/context/subPackage";
import { NotificationProvider } from "@/context/notification";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </Head>
      <UserProvider>
        <PackageProvider>
          <SubscriptionProvider>
            <NotificationProvider>
              <Navbar />
              <ToastContainer />
              <Component {...pageProps} />
              <Footer />
            </NotificationProvider>
          </SubscriptionProvider>
        </PackageProvider>
      </UserProvider>
    </>
  );
};

export default App;
