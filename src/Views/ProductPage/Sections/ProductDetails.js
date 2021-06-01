import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../Components/Grid/GridContainer";
import GridItem from "../../../Components/Grid/GridItem";
import RadioColorSelect from "../../../Components/RadioButtonCustom/RadioColorSelect";

const productStyles = {
  branchTitle: {
    fontSize: "25px",
    margin: "10px 0 10px",
    padding: "5px",
    fontWeight: "bold",
    fontFamily: "serif",
  },
  attBox: {
    padding: "70px 0",
  },
  attTitle: {
    opacity: "0.5",
    fontSize: "18px",
    textTransform: "uppercase",
    fontFamily: "serif",
  },
  attContentBox: {
    display: "flex",
  },
  attContentSizeItem: {
    width: "40px",
    height: "40px",
    border: "1px solid rgba(0, 0, 0, .5)",
    opacity: "0.5",
    padding: "8px",
    marginTop: "5px",
    marginRight: "5px",
    textAlign: "center",
  },
  productPrice: {
    marginLeft: "10px",
    color: "#cf2b2f",
    fontSize: "25px",
    fontFamily: "serif",
  },
  radioButton: {
    paddingTop: "10px",
    width: "500px",
    margin: "10px 0 10px",
  },
  boxShadow: {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  },
  minusOne: {
    backgroundColor: "#7ec5d986",
    border: "solid 1px transparent",
    cursor: "pointer",
    height: "30px",
  },

  plusOne: {
    backgroundColor: "#7ec5d986",
    border: "solid 1px transparent",
    cursor: "pointer",
    height: "30px",
  },
  showAmount: {
    width: "50px",
    border: "1px solid #7ec5d986",
    height: "30px",
  },
  plusAndMinusContainer: {
    float: "left",
    marginRight: "5px",
  },
  amountContener: {
    marginLeft: "55px",
    marginTop: "20px",
  },
  btnAddToCard: {
    marginLeft: "5px",
    padding: "2px 10px 2px",
    background: "#f26a52",
    border: "2px solid transparent",
    borderRadius: "5px",
    color: "white",
    height: "30px",
  },
  productDetailContainer: {
    borderBottom: "1px solid",
    borderLeft: "1px solid",
    padding: "0 0 25x",
  },
};

const useStyles = makeStyles(productStyles);
const colorList = ["brown", "red", "purple", "white"];
const title = ["Color", "Size"];

export default function SimpleSlider() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12}>
            <div className={classes.branchTitle}>
              PRODUCT NAME WITH LONG TEXT TO TEST
            </div>
            <div className={classes.productPrice}>Vnd 500000</div>

            <div className={classes.attBox}>
              <div className={classes.attTitle}>Color</div>
              <RadioColorSelect/>
              <div className={classes.attTitle}>Size</div>
              <div className={classes.attContentBox}>
                <div className={classes.attContentSizeItem}>S</div>
                <div className={classes.attContentSizeItem}>M</div>
                <div className={classes.attContentSizeItem}>L</div>
                <div className={classes.attContentSizeItem}>XL</div>
              </div>
            </div>

            <div className={classes.amountContener}>
              <div className={classes.plusAndMinusContainer}>
                <button className={classes.minusOne}>-1</button>
                {/* input here */}
                <input className={classes.showAmount} />

                <button className={classes.plusOne}>+1</button>
              </div>
              <div>
                <button className={classes.btnAddToCard}>Add To Card</button>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
