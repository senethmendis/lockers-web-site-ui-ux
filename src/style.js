const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    
    heading1: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",

    flexCenter :"flex justify-center items-center",
    flexStart: "flex justify-center items-start",
}

export const layout = {
    section: `flex lg:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex sm:flex-row flex-col-reverse ${styles.paddingY}`,
  
}

export default styles;