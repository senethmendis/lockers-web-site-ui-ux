import React from "react";
import styles from "../style";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import Coin from "./Coin";

const Token = () => (
  <section
    className={`px-4 ${styles.paddingY} flex flex-col lg:flex-row h-[500px]`}
  >
    <div className={`flex-1 flex flex-col justify-center `}>
      <div className="flex flex-row">
        <div className="w-[3px]   sm:mr-2 bg-secondery rounded-full " />
        <h1 className={`${styles.heading1}`}>
          $ELD Token <span className="text-primary">soon...</span>
        </h1>
      </div>
      <p className={`${styles.paragraph} text-white text-justify`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum aut
        similique eum minima nisi. Molestiae culpa nobis animi eius autem odit
        quasi aperiam deserunt qui. Eius voluptate nostrum quam non!
      </p>
    </div>
    <div className={`flex-1 ${styles.flexCenter} mb-16 sm:mb-0`}>
      <Canvas
        camera={{ fov: 45, near: 0.01, far: 1000, position: [0, 0, 5] }}
        
      >
        <OrbitControls enableZoom={false} />
        <Stage environment={"warehouse"} intensity={0.6}>
          <Coin />
        </Stage>
      </Canvas>
    </div>
  </section>
);

export default Token;
