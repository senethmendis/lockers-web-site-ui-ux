import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import styles from '../style'

const Button = ({text,bgColor,textColor,dementions}) => 
  (
    <button className={`${textColor} ${bgColor} ${dementions} ${styles.flexCenter}    border gap-2 py-1 px-4 rounded-full`}>{text}<AiOutlineArrowRight/> </button>
  )


export default Button