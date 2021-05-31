import React from "react";
import MainPage from "./Views/Components/Main";

import { createBrowserHistory } from "history";
import { Router, Route, Switch, useParams } from "react-router-dom";

import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

import "./assets/scss/material-kit-react.scss?v=1.9.0";
import Header from "./Components/Header/Header";
import HeaderLinks from "./Components/Header/HeaderLinks";
import Parallax from "./Components/Parallax/Parallax";
import GridContainer from "./Components/Grid/GridContainer";
import Footer from "./Components/Footer/Footer";
import landingPageStyle from "./assets/jss/material-kit-react/views/components";
import { makeStyles } from "@material-ui/core";
import GridItem from "./Components/Grid/GridItem";
import ProductPage from "./Views/ProductPage/ProductPage";

import './App.css'

import FilterPage from './Views/FilterPage/FilterPage'
import CartPage from "./Views/CartPage/Cart";
const useStyles = makeStyles(landingPageStyle);
const useStyles2 = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    position: 'fixed',
    right: 0,
    zIndex: 999,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
// import LandingPage from './Views/LandingPage/LandingPage';
var hist = createBrowserHistory();
function App() {
  const classes = useStyles();

  const classes2 = useStyles2();
  return (
    <Router history={hist}>
      <Header
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />
      <Parallax
        filter
        image={require("./assets/img/banner_PREORDER4_-04-03-2021-19-04-57.jpg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.brand}>
                <h1 className={classes.title}>Shopping</h1>
                <h3 className={classes.subtitle}>
                  Relax your mind, choose your best and dress up with our.
                </h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classes2.root}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
          <Fab color="secondary" aria-label="edit">
            <EditIcon />
          </Fab>
          <Fab variant="extended">
            <NavigationIcon className={classes2.extendedIcon} />
            Navigate
          </Fab>
          <Fab disabled aria-label="like">
            <FavoriteIcon />
          </Fab>
        </div>
      <Switch>
        <Route path="/cart" component={CartPage}/>
        <Route path="/filter" component={FilterPage}/>
        <Route path="/:id" component={ProductPage}/>
        <Route path="/" component={MainPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

function Child(){
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default App;
