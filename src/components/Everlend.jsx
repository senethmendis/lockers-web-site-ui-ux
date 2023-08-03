import React from "react";
import Button from "./Button";
import styles from "../style";
import { cards } from "../constance";
import { FiArrowUpRight } from "react-icons/fi";

const EverlanderCard = ({ img, title, subtext }) => (
  <div className={`w-full h-full p-4 text-white bg-primary rounded-lg`}>
    <img
      src={img}
      alt={title}
      className="object-cover w-full h-[230px] rounded-lg"
    />

    <h3 className="text-3xl py-4 h-[100px]">{title}</h3>
    <p className={`${styles.paragraph} text-gray-400`}>{subtext}</p>
    <div className="w-full flex justify-end">
      <FiArrowUpRight />
    </div>
  </div>
);

const Everlend = () => {
  return (
    <section
      id="About"
      className={`flex flex-col ${styles.paddingY} px-4 sm:px-0`}
    >
      <div className={`${styles.flexCenter} w-full flex flex-row justify-between`}>
        <h1 className={`${styles.heading1}`}>
          More about <span className="text-secondery">Everlend</span>
        </h1>
        <Button
          text={"More Posts in Blog"}
          textColor={"text-white"}
          bgColor={"bg-primary"}
          dementions={"w-[260px] h-[50px]"}
        />
      </div>
      <div
        className={`${styles.flexCenter} gap-10 sm:gap-3 flex flex-col md:flex-row ${styles.paddingY}`}
      >
        {cards.map((carditem) => (
          <EverlanderCard
            key={carditem.id}
            img={carditem.img}
            title={carditem.title}
            subtext={carditem.disk}
          />
        ))}
      </div>
    </section>
  );
};

export default Everlend;
