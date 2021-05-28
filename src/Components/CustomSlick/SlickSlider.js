import React, { useState } from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components

import Slider from "react-slick";

import image1 from "../../assets/img/examples/clem-onojegaw.jpg";
import image2 from "../../assets/img/examples/studio-2.jpg";
import image3 from "../../assets/img/examples/studio-3.jpg";
import image4 from "../../assets/img/examples/studio-5.jpg";

import ImageList from "../ImageList/ImageList";
import GridItem from "../Grid/GridItem";
import GridContainer from "../../Components/Grid/GridContainer.js";

export default function SlickSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        vertical: false,
        arrows: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [selectedImg, setSelectedImg] = useState(image1);
    const [itemCLick, setItemClick] = useState(true)

    const listBanner = [image1, image2, image3, image4];

    const slideItem = listBanner.map((item, index) => {
        return (<div key={index}>
            <img src={item} alt={`index-${index}`} className="slick-image" />
        </div>)
    })


    const onChangeImage = index => {
        setSelectedImg(listBanner[index])
        setItemClick(false)
    }

    const itemSlideShow = itemCLick ? slideItem : <img src={selectedImg} alt={selectedImg} style={{ width: '100%' }} />

    return (
        <GridContainer>
            <GridItem xs={2}>
                <div>
                    <ImageList images={listBanner} customStyle={{ width: '125px' }} imageStyle={{ width: '125px' }} onClick={onChangeImage} />
                </div>
            </GridItem>
            <GridItem xs={5}>
                <Slider {...settings}>
                    {itemSlideShow}
                </Slider>
            </GridItem>
            <GridItem xs={5}>
                <h2>product Option here</h2>
            </GridItem>
        </GridContainer>
    );
}