import { useRouter } from "next/router";
import React from "react";

const FooterComponent = () => {
  const router = useRouter();
  return (
    <footer className="bg-black text-white py-8 border-t-2 border-white bottom-0 w-full">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-4 flex justify-center">
          <img
            src={`${
              router.asPath === "/dashboard" || router.asPath === "/history"
                ? "https://xxride.com/wp-content/uploads/2022/02/Untitled-design.png"
                : "https://xxride.com/wp-content/uploads/2021/12/font.png"
            }`}
            alt="XXRide Logo"
            style={{
              width: `${
                router.asPath !== "/dashboard" && router.asPath !== "/history"
                  ? "auto"
                  : "129px"
              }`,
              height: `${
                router.asPath !== "/dashboard" && router.asPath !== "/history"
                  ? "auto"
                  : "43px"
              }`,
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
