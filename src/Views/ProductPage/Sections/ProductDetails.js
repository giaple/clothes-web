import React, { useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../Components/Grid/GridContainer";
import GridItem from "../../../Components/Grid/GridItem";
import RadioColorSelect from "../../../Components/RadioButtonCustom/RadioColorSelect"

import RadioSizeSelect from "../../../Components/RadioButtonCustom/RadioSizeSelect"

const productStyles = {
    branchTitle: {
        fontSize: '25px',
        color: 'black',
        background: 'white',
        margin: '10px 0 10px',
        border: '1px solid transparent',
        backgroundColor: '#db9e48',
        color: '#f7f5f2',
        padding: '5px',
        borderRadius: '10px'
    },
    boxNew: {
        fontSize: '10px',
        color: 'white',
        background: 'orange',
        textAlign: 'center',
        width: '35px',
        margin: '10px 0 10px'
    },
    productPrice: {
        color: '#79A8B1',
        marginLeft: '10px',
    },
    radioButton: {
        paddingTop: '10px',
        width: '500px',
        margin: '10px 0 10px'
    },
    boxShadow: {
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    },
    minusOne: {
        backgroundColor: '#7ec5d986',
        border: 'solid 1px transparent',
        cursor: 'pointer',
        height: '30px'
    },

    plusOne: {
        backgroundColor: '#7ec5d986',
        border: 'solid 1px transparent',
        cursor: 'pointer',
        height: '30px'
    },
    showAmount: {
        width: '50px',
        border: '1px solid #7ec5d986',
        height: '30px'
    },
    plusAndMinusContainer: {
        float: 'left',
        marginRight: '5px',
    },
    amountContener: {
        marginLeft: '55px',
        marginTop: '20px',
    },
    btnAddToCard: {
        marginLeft: '5px',
        padding: '2px 10px 2px',
        background: '#f26a52',
        border: '2px solid transparent',
        borderRadius: '5px',
        color: 'white',
        height: '30px'
    },
    productDetailContainer: {
        borderBottom: '1px solid',
        borderLeft: '1px solid',
        padding: '0 0 25x'
    }
};

const useStyles = makeStyles(productStyles);
const colorList = ['brown', 'red', 'purple', 'white']
const title = ['Color', 'Size']

export default function SimpleSlider() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer >
                    <GridItem xs={12}>
                        <div className={classes.branchTitle}> BRANCH NAME</div>
                        <div className={classes.productPrice}>$ 1998</div>
                        <div className={classes.radioButton}>
                            <RadioColorSelect colorList={colorList} title={title} />
                        </div>
                        <div className={classes.radioButton}>
                            <RadioSizeSelect />
                        </div>
                        <div className={classes.amountContener}>
                            <div className={classes.plusAndMinusContainer} >
                                <button className={classes.minusOne}>
                                    -1
                                </button>
                                {/* input here */}
                                <input className={classes.showAmount} />

                                <button className={classes.plusOne}>
                                    +1
                                </button>
                            </div>
                            <div >
                                <button className={classes.btnAddToCard}>Add To Card</button>
                            </div>
                        </div>
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    );
}
