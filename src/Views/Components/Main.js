import React from "react";
import { makeStyles } from "@material-ui/core";
import landingPageStyle from "../../assets/jss/material-kit-react/views/components";

import classNames from "classnames";
import SectionCarousel from "./Sections/SectionCarousel";
import CustomDevider from "../../Components/CustomDevider/CustomDevider";
import SectionNewClothes from "./Sections/SectionNewClothes";
import SectionInstagram from "./Sections/SectionInstagram";
const useStyles = makeStyles(landingPageStyle);


export default function MainPage(props) {
  const classes = useStyles();

  return (
    <div>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel />
        <SectionCarousel />
        <CustomDevider>Sản Phẩm Mới</CustomDevider>
        <SectionNewClothes />
        <CustomDevider>Instagram</CustomDevider>
        <SectionInstagram />
        
      </div>
    </div>
  );
}
