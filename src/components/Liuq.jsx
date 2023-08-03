import React from "react";
import styles from "../style";
import { Liuqd } from "../constance";

const Card = ({ img, title, subText, disk }) => (
  <div className="w-full p-6 md:p-4 flex flex-col md:flex-row bg-black-gradient rounded-xl">
    <img src={img} alt={title} className="md:w-1/2 rounded-xl" />
    <div className={`${styles.flexStart} flex-col  md:pl-10`}>
      <h1 className={`${styles.heading1}`}>{title}</h1>
      <p className={`${styles.paragraph} text-secondery`}>{subText}</p>
      <p className={`${styles.paragraph} text-white text-justify md:text-left`}>{disk}</p>
    </div>
  </div>
);

const Liuq = () => (
  <section className={`${styles.paddingX} ${styles.paddingY}`}>
    <div className={`w-full`}>
      <h1 className={`${styles.heading1} mb-10`}>
        Liquidity Oracle <br className="sm:block hidden" /> Algorithm{" "}
      </h1>
    </div>
    <div className="w-full flex flex-col gap-3">
      {Liuqd.map((items) => (
        <Card
          key={items.id}
          img={items.img}
          title={items.title}
          subText={items.subText}
          disk={items.disc}
        />
      ))}
    </div>
  </section>
);

export default Liuq;
