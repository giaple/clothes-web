import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";
import image4 from "../../assets/img/examples/studio-2.jpg";
import image5 from "../../assets/img/examples/studio-3.jpg";

import classNames from "classnames";
import CustomImage from "../../Components/CustomImage/CustomImage";
import GridItem from "../../Components/Grid/GridItem";
import GridContainer from "../../Components/Grid/GridContainer";

import { SizeDropDownModel, ColorDropDownModel } from '../../utils/models';
import CustomMenuItem from "../../Components/Common/MenuItem/MenuItem";

import Card from "../../Components/Card/Card";
import CardBody from "../../Components/Card/CardBody";
import CardFooter from "../../Components/Card/CardFooter";
import FilterBar from "../../Components/Common/FilterBar/FilterBar";



const useStyles = makeStyles(landingPageStyle);

export default function FilterPage(props) {
    const classes = useStyles();
    const [sizeText, setSizeText] = useState('Size');
    const [colorText, setColorText] = useState('Color');
    const [data, setData] = useState([]);

    const filterAction = () => {

    }

    const render = data.map(item => {
        return (
            <GridItem lg ={3} md={4} xs={6}>
                <Card>
                    <CardBody>
                        <CustomImage img={item.images[0]} sub={item.images[1]} imgStyle={{ with: '80%' }} />
                    </CardBody>
                    <CardFooter>
                        <div style={{
                            textAlign: 'center',
                            width: '100%',
                            fontSize: 'large',
                            fontFamily: 'sans-serif',
                            fontWeight: 'bold',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis'
                        }}>{item.name}</div>
                    </CardFooter>
                </Card>
            </GridItem>
        )
    })

    useEffect(() => {
        setData([
            { name: 'test item 1 name', images: [image4, image5] },
            { name: 'TEST ITEM WITH LONG TEXT LIKE THIS TO SEE HOW IT SHOW', images: [image4, image5] },
            { name: 'test item 3 name', images: [image4, image5] },
            { name: 'test item 4 name', images: [image4, image5] }
        ])
    }, [])

    return (
        <div className={classNames(classes.main, classes.mainRaised)}>
            <FilterBar setSizeText={setSizeText} setColorText={setColorText} sizeText={sizeText} colorText={colorText}/>
            <GridContainer>
                {render}
            </GridContainer>

        </div>
    );
}
