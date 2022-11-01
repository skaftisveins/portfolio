import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Yo what up!", "I am Skafti, Welcome..", "Stay awhile and listen"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src={"https://avatars.githubusercontent.com/u/44779638?v=4"}
        /*  src={
          "https://skaftisveins.webdev.is/wp-content/uploads/2022/10/C5B6B71B-76C3-4395-AB2C-3E30B461A10B.jpeg"
        } */
        alt={""}
        /* width={}
        height={} */
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-[rgba(0,137,216,0.62)] pb-2 tracking-[10px]">
          IT Technician
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold px-10 text-[#008ad8]">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="rgb(0,138,216)" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button
              className="heroButton
            "
            >
              About
            </button>
          </Link>
          <Link href="#experience">
            <button
              className="heroButton
            "
            >
              Experience
            </button>
          </Link>
          <Link href="#skills">
            <button
              className="heroButton
            "
            >
              Skills
            </button>
          </Link>
          <Link href="#projects">
            <button
              className="heroButton
            "
            >
              Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
