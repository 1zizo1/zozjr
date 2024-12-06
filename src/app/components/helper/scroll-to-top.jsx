"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";
import React from "react"; 

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const HIDDEN_CLS = " hidden";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`${DEFAULT_BTN_CLS}${!isVisible ? HIDDEN_CLS : ""}`}
      onClick={onClickBtn}
      style={{ display: isVisible ? "block" : "none" }} // Ensures hydration match
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
