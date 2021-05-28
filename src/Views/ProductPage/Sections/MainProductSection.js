import React, { useState } from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components



import styles from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import SlickSlider from "../../../Components/CustomSlick/SlickSlider"

const useStyles = makeStyles(styles);

export default function MainProductSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <SlickSlider />
      </div>
    </div>
  );
}
