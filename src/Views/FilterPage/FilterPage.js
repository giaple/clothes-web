import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";
import image4 from "../../assets/img/examples/studio-2.jpg";
import image5 from "../../assets/img/examples/studio-3.jpg";

import classNames from "classnames";
import CustomImage from "../../Components/CustomImage/CustomImage";
import GridItem from "../../Components/Grid/GridItem";
import GridContainer from "../../Components/Grid/GridContainer";
import CustomDropdown from "../../Components/CustomDropdown/CustomDropdown";
import { Link } from "react-router-dom";

import { SizeDropDownModel, ColorDropDownModel } from '../../utils/models';
import CustomMenuItem from "../../Components/Common/MenuItem/MenuItem";
import SearchIcon from '@material-ui/icons/Search';
import RegularButton from "../../Components/CustomButtons/Button";



const useStyles = makeStyles(landingPageStyle);

export default function FilterPage(props) {
    const classes = useStyles();
    const [sizeText, setSizeText] = useState('Size');
    const [colorText, setColorText] = useState('Color');

    const menuSize = SizeDropDownModel.map(item => {
        return <CustomMenuItem name={item.name} key={`${item.name} - ${item.value}`} select={setSizeText} />
    })

    const menuColor = ColorDropDownModel.map(item => {
        return <CustomMenuItem name={item.name} key={`${item.name} - ${item.value}`} select={setColorText} />
    })

    const filterAction = () => {

    }

    return (
        <div className={classNames(classes.main, classes.mainRaised)}>

            <div style={{ height: '100px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>Lọc Theo: </div>
                <CustomDropdown
                    dropup={false}
                    left={false}
                    noLiPadding
                    buttonText={sizeText}
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                    }}
                    dropdownList={menuSize}
                />
                <CustomDropdown
                    dropup={false}
                    left={false}
                    noLiPadding
                    buttonText={colorText}
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                    }}
                    dropdownList={menuColor}
                />
                <RegularButton
                    onClick={filterAction}
                >
                    <SearchIcon />
                </RegularButton>
            </div>

            <GridContainer spacing={4}>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
                <GridItem md={4} xs={6}>
                    <CustomImage img={image4} sub={image5} imgStyle={{ with: '100%' }} />
                </GridItem>
            </GridContainer>

        </div>
    );
}
