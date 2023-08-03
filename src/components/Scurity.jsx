import React from "react";
import styles from "../style";
import { security } from "../constance";

const Card = ({ img, disck, title }) => (
  <div
    className={`${styles.flexStart} w-full flex-col text-white bg-primary p-4 rounded-xl`}
  >
    <img src={img} alt={title} className="w-[48px] h-[48px]" />
    <h1 className="font-poppins font-bold text-2xl py-2">{title}</h1>
    <p className={`${styles.paragraph}`}>{disck}</p>
  </div>
);

const Scurity = () => (
  <section
    className={`${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} flex lg:flex-row flex-col`}
  >
    <div className={`flex-1 w-full relative my-10 sm:my-0 ${styles.flexStart}`}>
      <h1 className={`${styles.heading1} `}>
        {" "}
        Security is our <br className="sm:block hidden" />
        top priority
      </h1>
      <div className="green__gradient w-[100%] h-[100%] -z-50 absolute m-auto -left-48" />
    </div>
    <div className={`flex-1 flex md:flex-row flex-col gap-3`}>
      {security.map((items) => (
        <Card key={items.id} {...items} />
      ))}
    </div>
  </section>
);

export default Scurity;
