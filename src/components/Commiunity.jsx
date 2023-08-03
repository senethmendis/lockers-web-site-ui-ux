import React from "react";
import styles, { layout } from "../style";
import { community } from "../constance";
import Card from "./Card";
const Commiunity = () => (
  <section
    className={`${styles.paddingY}  relative flex flex-col md:flex-row px-6 md:px-0`}
  >
    <div className={`flex-1 ${styles.flexCenter}`}>
      <h1 className={`${styles.heading1} text-center sm:text-left`}>
        Our Commiunity <br className="sm:block hidden" />
        is worldwide.
      </h1>
    </div>

    <div className={`${styles.flexCenter} flex-1`}>
      <div
        className={`w-full h-full grid gap-4 grid-cols-1 md:grid-cols-2  `}
      >
        {community.map((cardset) => (
          <Card
            key={cardset.id}
            img={cardset.img}
            count={cardset.count}
            text={`${cardset.id} member`}
          />
        ))}
      </div>
    </div>

    <div
      className={` hidden md:block w-[150px] h-[150px]  rounded-full bg-green-gradient-2 absolute -z-50 m-auto top-0 bottom-0 left-0 -right-20`}
    />
  </section>
);

export default Commiunity;
