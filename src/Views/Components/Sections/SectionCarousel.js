import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "../../../Components/Grid/GridContainer.js";
import GridItem from "../../../Components/Grid/GridItem.js";
import Card from "../../../Components/Card/Card.js";

import image1 from "../../../assets/img/seasons/A_-09-10-2020-19-38-00.jpg";
import image2 from "../../../assets/img/seasons/banner web_-07-09-2020-01-51-12.jpg";
import image3 from "../../../assets/img/seasons/banner web_-11-01-2021-12-16-39.jpg";
import image4 from "../../../assets/img/seasons/banner web_-22-11-2020-13-26-16.jpg";


import styles from "../../../assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const listBanner = [image1, image2, image3, image4];

  const slideItem = listBanner.map((item, index) => {
    return (<div key={index}>
      <img src={item} alt={`index-${index}`} className="slick-image" />
    </div>)
  })

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {slideItem}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
