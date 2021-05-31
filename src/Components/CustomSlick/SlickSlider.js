import React, { useState } from "react";

import Slider from "react-slick";

import image1 from "../../assets/img/examples/clem-onojegaw.jpg";
import image2 from "../../assets/img/examples/studio-2.jpg";
import image3 from "../../assets/img/examples/studio-3.jpg";
import image4 from "../../assets/img/examples/studio-5.jpg";

import GridItem from "../Grid/GridItem";
import GridContainer from "../../Components/Grid/GridContainer.js";

import classes from './SlickSlider.module.scss'

export default function SlickSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        vertical: true,
        arrows: true,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                },
                vertical: false
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    vertical: false,
                    arrows: false,
                },

            }
        ]
    };

    const [selectedImg, setSelectedImg] = useState(image1);
    const listBanner = [image1, image2, image3, image4];

    const onChangeImage = index => {
        setSelectedImg(listBanner[index])
    }

    const slideItem = listBanner.map((item, index) => {
        return (<div key={index}>
            <img src={item} alt={`index-${index}`} className="slick-image" onClick={() => { onChangeImage(index) }} />
        </div>)
    })

    return (
        <div className= {classes.slicker}>
            <GridContainer>
                <GridItem md={2}>
                    <div>
                        <Slider {...settings}>
                            {slideItem}
                        </Slider>
                    </div>
                </GridItem>
                <GridItem md={10}>
                    <img src={selectedImg} alt={selectedImg} style={{width: '100%'}}/>
                </GridItem>
            </GridContainer>

        </div>
    );
}