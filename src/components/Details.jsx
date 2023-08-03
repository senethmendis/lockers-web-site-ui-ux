import React from "react";
import styles, { layout } from "../style";
import { mainImg } from "../assets";
const Details = () => {
  return (
    <section
      className={` ${styles.flexCenter} ${styles.paddingY}  relative md:flex-col flex-col-reverse`}
    >
      <div className={`w-[70%] h-[70%] mt-10 md:mt-0 p-2 bg-green-gradient rounded-lg`}>
        <div className="bg-primary">
          <img src={mainImg} alt="" />
        </div>
      </div>
      <div className="green__gradient absolute w-[50%] h-[50%] top-10 -z-50" />
      <div className={`${styles.paddingX} flex-col md:flex-row w-full flex mt-14 `}>
        <div className={`${styles.flexCenter}  flex-1`}>
          <div className="w-[2px] h-full  sm:mr-2 bg-secondery rounded-full " />
          <h1 className={`${styles.heading1}`}>
            Simplicity. <br />
            Security. <br />
            Convenience. <br />
          </h1>
        </div>
        <div className={`${styles.flexCenter} flex-1 `}>
          <p className={`${styles.paragraph} text-white`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            possimus reprehenderit, fuga consequuntur aliquam ipsam dolore.
            Exercitationem esse, autem excepturi omnis libero impedit suscipit
            tempore vero consectetur? Consectetur, itaque dignissimos?
          </p>
        </div>
      </div>
    </section>
  );
};

export default Details;
