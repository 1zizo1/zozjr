"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);
  const [isMounted, setIsMounted] = useState(false); // Track if the component is mounted

  useEffect(() => {
    // Check if window is defined to avoid SSR errors
    if (typeof window !== "undefined") {
      setIsMounted(true); // Set mounted state to true when window is available

      const handleScroll = () => {
        if (window.scrollY > SCROLL_THRESHOLD) {
          setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
        } else {
          setBtnCls(DEFAULT_BTN_CLS + " hidden");
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll, { passive: true });
      };
    }
  }, []); // Run only once after component mounts

  const onClickBtn = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Only render the component if it's mounted to avoid SSR issues
  if (!isMounted) {
    return null;
  }

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
