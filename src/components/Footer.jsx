import React from "react";
import styles from "../style";
import { discordLogo, twitter } from "../assets";
import { BiLogoMagento } from "react-icons/bi";

const Footer = () => (
  <section
    className={`p-0 sm:${styles.paddingX} ${styles.paddingY} mb-0 md:mb-4 rounded-none lg:rounded-xl justify-between bg-primary flex`}
  >
    <div className={`${styles.flexCenter} gap-2`}>
      <BiLogoMagento size={60} color="#34b955" />{" "}
      <span className={`${styles.heading1} `}>Lockers</span>
    </div>
    <div className="flex flex-col gap-4 sm:gap-8">
      <img src={discordLogo} alt="" className="footer-img" />
      <img src={twitter} alt="" className="footer-img" />
    </div>
  </section>
);

export default Footer;
