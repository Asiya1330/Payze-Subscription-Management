import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-black text-white py-8 border-t-2 border-white bottom-0 w-full">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="mb-4 flex justify-center">
          <img
            src="https://xxride.com/wp-content/uploads/2021/12/font.png" 
            alt="XXRide Logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
