import React, { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showButton = show ? "block" : "hidden";
  
  const toggleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`fixed bg-red-500 border border-red-500 w-10 h-10 bottom-5 right-5 rounded-full md:bottom-8 md:right-8 ${showButton} transition duration-300 hover:bg-red-600 hover:border-red-700`}
      onClick={toggleToTop}
    >
      <i className="ri-arrow-up-line text-white text-xl"></i>
    </button>
  );
};
