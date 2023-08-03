import React from "react";
import {BsBoxArrowInUpRight} from 'react-icons/bs'
const Card = ({ img, count, text }) => (
  <div className="min-w-[250px] bg-primary flex flex-row p-3 rounded-xl">
    
    <img src={img} alt={text} className="w-[28px] h-[28px] p-1 bg-black rounded-full" />
    
    <div className="ml-5 flex flex-col w-full text-white">
        <h3 className="font-poppins text-xl font-bold ">{count}</h3>
        <p className={`font-normal`}>{text} </p>
        <div className="w-full flex justify-end"><BsBoxArrowInUpRight/></div>
        
    </div>
  </div>
);

export default Card;
