import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../../Components/Header/Header";
import HeaderLinks from "../../Components/Header/HeaderLinks";
import Parallax from "../../Components/Parallax/Parallax";
import GridContainer from "../../Components/Grid/GridContainer";
import GridItem from "../../Components/Grid/GridItem";
import landingPageStyle from "../../assets/jss/material-kit-react/views/components";

import classNames from "classnames";
import Footer from "../../Components/Footer/Footer";
import SectionCarousel from "./Sections/SectionCarousel";
import CustomDevider from "../../Components/CustomDevider/CustomDevider";
import SectionNewClothes from "./Sections/SectionNewClothes";
import SectionInstagram from "./Sections/SectionInstagram";
const useStyles = makeStyles(landingPageStyle);

export default function MainPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        filter
        image={require("../../assets/img/banner_PREORDER4_-04-03-2021-19-04-57.jpg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Shopping</h1>
                <h3 className={classes.subtitle}>
                  Relax your mind, choose your best and dress up with our.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionCarousel/>
        <SectionCarousel/>
        <CustomDevider>Sản Phẩm Mới</CustomDevider>
        <SectionNewClothes/>
        <CustomDevider>Instagram</CustomDevider>
        <SectionInstagram/>
      </div>
      <Footer />
    </div>
  );
}
