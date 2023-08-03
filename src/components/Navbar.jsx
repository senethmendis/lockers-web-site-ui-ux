import React, { useState } from "react";
import styles from "../style";
import { navLink } from "../constance";
import { BiLogoMagento, BiMenuAltRight } from "react-icons/bi";
import Button from "./Button";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className={`w-full flex justify-between items-center py-4`}>
      <div
        className={`${styles.flexCenter} text-white font-bold text-[20px] tracking-wide flex gap-2`}
      >
        <BiLogoMagento size={30} color="white" /> <span>Lockers</span>
      </div>

      <ul
        className={`${styles.flexCenter} hidden sm:flex items-end text-white gap-8 font-poppins tracking-wide`}
      >
        {navLink.map((links, index) => (
          <li key={links.id}>
            {" "}
            <a href={`#${links.name}`}> {links.name} </a>{" "}
          </li>
        ))}
      </ul>
      <div className="flex gap-4">
        <Button
          text={"Lunch App"}
          bgColor={"bg-primary"}
          textColor={"text-white"}
        />

        <div
          className=" gap-4 sm:hidden relative flex"
          onClick={() => setToggle((prev) => !prev)}
        >
          {toggle ? (
            <AiFillCloseCircle size={40} color="white" />
          ) : (
            <BiMenuAltRight size={40} color="white" />
          )}
        </div>

        <div className={`${styles.flexCenter} ${toggle? "" : "hidden"} sidebar sm:hidden flex z-50  absolute bg-green-gradient p-4 rounded-lg right-5 top-20`}>
          <ul
            className={`${styles.flexCenter}  flex flex-col  text-white gap-8 font-poppins tracking-wide`}
          >
            {navLink.map((links) => (
              <li key={links.id}>
                {" "}
                <a href={`#${links.name}`}> {links.name} </a>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
