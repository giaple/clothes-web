import React from "react";
import { makeStyles } from "@material-ui/core";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";
import classNames from "classnames";

import CartItem from "./Sections/CartItem";

const useStyles = makeStyles(landingPageStyle);

export default function CartPage(props) {
    const classes = useStyles();

    // const redner


    return (
        <div className={classNames(classes.main, classes.mainRaised)}>
            <div>Giỏ Hàng Của Bạn</div>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </div>
    );
}
