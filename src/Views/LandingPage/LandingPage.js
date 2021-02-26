import React from "react";
import { makeStyles } from "@material-ui/core";

import GridContainer from "../../Components/Grid/GridContainer";
import GridItem from "../../Components/Grid/GridItem";
import Button from "../../Components/CustomButtons/Button";
import Header from '../../Components/Header/Header'
import HeaderLinks from '../../Components/Header/HeaderLinks'

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";
import Parallax from "../../Components/Parallax/Parallax";

const useStyles = makeStyles(landingPageStyle);

export default function LandingPage(props) {
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
          color: "white"
        }}
        {...rest}
      />
      <Parallax filter image={require("../../assets/img/bg4.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
}
