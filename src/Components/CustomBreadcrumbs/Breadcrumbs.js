import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const CustomBreadcrumbs = (props) => {
  const classes = useStyles();
  const render = props.categories.map((categorie) => (
    <Link color="inherit" href={categorie.url} onClick={handleClick}>
      {categorie.name}
    </Link>
  ));

  return (
    <div className={classes.root}>
      <Breadcrumbs separator=">>" aria-label="breadcrumb">
        <Link color="inherit" href="/" onClick={handleClick}>
          Trang Chủ
        </Link>
        {render}
        <Typography color="textPrimary">{props.productName}</Typography>
      </Breadcrumbs>
    </div>
  );
};

export default CustomBreadcrumbs;
