"use client";
import { useContext, useEffect, useState } from "react";

// next image
import Image from "next/image";

// React Scroll
import { Link } from "react-scroll";

//Components
import SearchMediaQuery from "./SearchMobile";

// Media query hook
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);

  const desktopMode = useMediaQuery({
    query: "(min-width:1300px)",
  });

  useEffect(() => {
    const handleScroll = () => {
      //header
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    };

    //add event listener
    window.addEventListener("scroll", handleScroll);

    // remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  console.log(header);
  return <div></div>;
}
