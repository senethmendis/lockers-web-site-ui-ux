import React from "react";
import styles from "../style";
import { logoList } from "../constance";

const LogoCard = ({ img }) => (
  <div className={`${styles.flexCenter} w-full bg-primary px-3 py-6 rounded-lg`}>
    <img src={img} alt={"logs"} className=" object-contain w-[150px] h-[35px]" />
  </div>
);

const Backers = () => (
  <section className={`${styles.paddingX} ${styles.paddingY}`}>
    <h1 className={`${styles.heading1}`}>Our backers</h1>
    <div className={`${styles.paddingY} w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full`}>
      {logoList.map((logo) => (
        <LogoCard key={logo.id} img={logo.img} />
      ))}
    </div>
  </section>
);

export default Backers;
