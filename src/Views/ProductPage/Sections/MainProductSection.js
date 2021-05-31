import React, { useState } from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components

import Grid from '@material-ui/core/Grid';

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import SlickSlider from "../../../Components/CustomSlick/SlickSlider"
import ProductDetails from './ProductDetails';

const useStyles = makeStyles(styles);

export default function MainProductSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SlickSlider />
          </Grid>
          <Grid item xs={12} md={6}>
            <ProductDetails />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
