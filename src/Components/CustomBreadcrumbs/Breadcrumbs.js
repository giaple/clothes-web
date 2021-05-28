import React from "react";
import { withStyles, emphasize, makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
  '@media (max-width: 768px)': {
    root: {
      display: 'none',
    },
  },
}))(Chip);

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2) - 1
  },
  '@media (max-width: 768px)': {
    root: {
      display: 'none',
    }
  }
}))

function handleClick(event) {
  // event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const CustomBreadcrumbs = (props) => {

  const classes = useStyles();
  const render = props.categories.map((categorie) => (
    <StyledBreadcrumb component="a" href={categorie.url} onClick={handleClick} label={categorie.name} />
  ));

  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.root}>
      <StyledBreadcrumb
        component="a"
        href="/"
        label="Trang Chủ"
        icon={<HomeIcon fontSize="small" />}
        onClick={handleClick}
      />
      {render}
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
