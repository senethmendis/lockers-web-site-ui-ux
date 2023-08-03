import React from "react";
import styles, { layout } from "../style";
import TechEngine from "./TechEngine";
import { BsArrowRightShort } from "react-icons/bs";
import { HiOutlinePlay } from "react-icons/hi2";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

const Hero = () => (
  <section className={`${layout.sectionReverse} px-4 sm:px-0`}>
    <div className={`${styles.flexCenter} flex-1  `}>
      <Canvas>
        <OrbitControls autoRotate={true} enableZoom={false} />
        <Stage environment={"city"} intensity={"0.6"}>
          <TechEngine />
        </Stage>
      </Canvas>
    </div>

    <div className={`flex-1 ${styles.flexStart} flex flex-col`}>
      <h1 className={`${styles.heading1}`}>
        Best rates on <br className="sm:block hidden" /> deposits and loans{" "}
      </h1>
      <p className={`${styles.paragraph} text-justify text-white pt-4 pr-8`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
        architecto, voluptates ad non dolore accusamus eum asperiores! In odit
        
      </p>
      <div className=" flex pt-10 gap-3 capitalize">
        <button className="hero-buttons bg-primary text-white">
          <span className={`${styles.flexCenter} bg-black rounded-full p-1`}>
            <HiOutlinePlay size={20} className="text-secondery" />
          </span>
          Watch Video{" "}
        </button>
        <button className="hero-buttons bg-secondery">
          {" "}
          Lunch App <BsArrowRightShort size={30} />{" "}
        </button>
      </div>
    </div>

    <div className="absolute -z-50 w-[40%] h-[35%]  green__gradient" />
  </section>
);

export default Hero;
