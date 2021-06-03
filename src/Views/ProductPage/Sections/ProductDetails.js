import React, { useEffect, useState } from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import GridContainer from "../../../Components/Grid/GridContainer";
import GridItem from "../../../Components/Grid/GridItem";
import RadioColorSelect from "../../../Components/RadioButtonCustom/RadioColorSelect";
import RadioSizeSelect from "../../../Components/RadioButtonCustom/RadioSizeSelect";

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
    marginBottom: '5px'
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
    fontSize: "25px",
    fontFamily: "serif",
    display: 'flex'
  },
  radioButton: {
    paddingTop: "10px",
    width: "500px",
    margin: "10px 0 10px",
  },
  boxShadow: {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
  },
  amountBtn: {
    width: "30px",
    border: "1px solid rgba(156, 165, 181, .5)",
    height: "20px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  showAmount: {
    width: "40px",
    border: "1px solid rgba(156, 165, 181, .5)",
    height: "40px",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  plusAndMinusContainer: {
    display: 'flex'
  },
  amountContener: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  btnAddToCard: {
    background: "#8a6b28",
    border: "2px solid transparent",
    borderRadius: "5px",
    color: "white",
    height: "50px",
    width: '50%',
    fontSize: 'xx-large',
    justifyContent: 'center',
    display: 'flex',
    fontFamily: 'serif',
    alignItems: 'center',
  },
  productDetailContainer: {
    borderBottom: "1px solid",
    borderLeft: "1px solid",
    padding: "0 0 25x",
  },
  totalPrice: {
    fontFamily: 'sans-serif',
    fontSize: '24px'
  },
  originalPrice: {
    paddingLeft: '20px',
    textDecoration: 'line-through',
    color: '##a69c9d'
  },
  salePrice: {
    color: '#d93444'
  },
  productInfoBox: {
    width: '100%',
    height: '200px',
    border: '1px solid'
  }
};

const useStyles = makeStyles(productStyles);
const colorList = [
  { name: "brown", selected: true },
  { name: "red", selected: false },
  { name: "purple", selected: false },
  { name: "white", selected: false }
];

const sizeList = [
  { name: 'S', selected: false },
  { name: 'M', selected: false },
  { name: 'S', selected: true },
  { name: 'XL', selected: false },
]
const title = ["Color", "Size"];

export default function SimpleSlider() {
  const classes = useStyles();

  const [selectedColor, setColor] = useState('');

  const [selectedSize, setSize] = useState(sizeList);

  const [quantity, setQuantity] = useState(1);

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12}>
            <div className={classes.branchTitle}>
              PRODUCT NAME WITH LONG TEXT TO TEST
            </div>
            <div className={classes.productPrice}>
              <div className={classes.salePrice}>VND 500000</div>
              <div className={classes.originalPrice}>VND 600000</div>
            </div>

            <div className={classes.attBox}>
              <div className={classes.attTitle}>Color</div>
              <RadioColorSelect colors={colorList} selectColor={setColor} selected={selectedColor} />
              <div className={classes.attTitle}>Size</div>
              <RadioSizeSelect sizes={selectedSize} selectSize={setSize}/>
              <div className={classes.attTitle}>Thông Tin Sản Phẩm: </div>
              <div className={classes.productInfoBox}></div>
            </div>

            <div className={classes.amountContener}>
              <div className={classes.plusAndMinusContainer}>
                <div className={classes.showAmount}>{quantity}</div>
                <div>
                  <div className={classes.amountBtn}>
                    +
                  </div>
                  <div className={classes.amountBtn}>
                    -
                  </div>
                </div>
              </div>
              <div className={classes.totalPrice}>1000000 VND</div>
              <div className={classes.btnAddToCard}>
                Add To Card
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
