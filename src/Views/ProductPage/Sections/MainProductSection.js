import React, { useState } from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "../../../Components/Grid/GridContainer.js";
import GridItem from "../../../Components/Grid/GridItem.js";

import image1 from "../../../assets/img/examples/clem-onojegaw.jpg";
import image2 from "../../../assets/img/examples/studio-2.jpg";
import image3 from "../../../assets/img/examples/studio-3.jpg";
import image4 from "../../../assets/img/examples/studio-5.jpg";


import styles from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";
import ImageList from "../../../Components/ImageList/ImageList.js";

const useStyles = makeStyles(styles);

export default function MainProductSection() {
  const classes = useStyles();
  const [selectedImg, setImg] = useState(image1);

  const listBanner = [image1, image2, image3, image4];

  const changeImage = index => {
      setImg(listBanner[index])
  }

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={2} sm={2} md={2} className={classes.marginAuto}>
            {<ImageList images={listBanner} customStyle={{width: 'inherit'}} imageStyle={{width: 'inherit'}} onClick={changeImage}/>}
          </GridItem>
          <GridItem xs={5} sm={5} md={6} className={classes.marginAuto}>
            {<img src={selectedImg} alt={selectedImg} style={{width: '100%'}}/>}
          </GridItem>
          <GridItem xs={5} sm={5} md={4} className={classes.marginAuto}>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
