import React from "react";
import { makeStyles } from "@material-ui/core";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";
import CustomBreadcrumbs from "../../Components/CustomBreadcrumbs/Breadcrumbs";

import MainProductSection from './Sections/MainProductSection'

import classNames from "classnames";

const useStyles = makeStyles(landingPageStyle);

export default function ProductPage(props) {
  const classes = useStyles();
  const categories = [
    { name: "Quần Áo", url: "/quan-ao" },
    { name: "Chân Váy", url: "/chan-vay" },
    { name: "Quần Giả Váy", url: "/quan-gia-vay" },
  ];
  return (
    <div className={classNames(classes.main, classes.mainRaised)}>
      <CustomBreadcrumbs categories={categories} productName={"DOTTIE-SKORT"} />
      <MainProductSection/>
    </div>
  );
}
