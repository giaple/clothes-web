import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Favorite from "@material-ui/icons/Favorite";

// core components
import GridContainer from "../../../Components/Grid/GridContainer.js";
import GridItem from "../../../Components/Grid/GridItem.js";
import Button from "../../../Components/CustomButtons/Button.js";

import styles from "../../../assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();

  React.useEffect(() => {
    return function cleanup() {};
  });

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Basic Elements</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              Buttons
              <br />
              <small>Pick your style</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Button color="primary">Default</Button>
              <Button color="primary" round>
                round
              </Button>
              <Button color="primary" round>
                <Favorite className={classes.icons} /> with icon
              </Button>
              <Button justIcon round color="primary">
                <Favorite className={classes.icons} />
              </Button>
              <Button color="primary" simple>
                simple
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
