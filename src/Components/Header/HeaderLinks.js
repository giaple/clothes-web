/*eslint-disable*/
import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.js";
import Button from "../CustomButtons/Button.js";

import styles from "../../assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const Jeans = {
    nested: true,
    item: (
      <CustomDropdown
        dropup={false}
        left={false}
        noLiPadding
        buttonText="Jeans"
        buttonProps={{
          className: classes.navLink,
          color: "transparent",
        }}
        dropdownList={[
          <Link to="/" className={classes.dropdownLink}>
            Chân Váy
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
            Short
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
            Quần Dài
          </Link>,
        ]}
      />
    ),
  };

  const Sweater = {
    nested: true,
    item: (
      <CustomDropdown
        dropup={false}
        left={false}
        noLiPadding
        buttonText="Sweater/Hoodie"
        buttonProps={{
          className: classes.navLink,
          color: "transparent",
        }}
        dropdownList={[
          <Link to="/" className={classes.dropdownLink}>
            Sweater
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
            Hoodie
          </Link>,
        ]}
      />
    ),
  };

  const Jumsuit = {
    nested: true,
    item: (
      <CustomDropdown
        dropup={false}
        left={false}
        noLiPadding
        buttonText="Đầm / Jumsuit"
        buttonProps={{
          className: classes.navLink,
          color: "transparent",
        }}
        dropdownList={[
          <Link to="/" className={classes.dropdownLink}>
            Mini
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
            Midi
          </Link>,
        ]}
      />
    ),
  };

  const shirt = {
    nested: true,
    item: (
      <CustomDropdown
        dropup={false}
        left={false}
        noLiPadding
        buttonText="Áo Sơ Mi / Áo Kiểu"
        buttonProps={{
          className: classes.navLink,
          color: "transparent",
        }}
        dropdownList={[
          <Link to="/" className={classes.dropdownLink}>
            Somi
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
            Áo Kiểu
          </Link>,
        ]}
      />
    ),
  };
  const tShirt = {
    nested: true,
    item: (
      <CustomDropdown
        dropup={false}
        left={false}
        noLiPadding
        buttonText="Áo Thun"
        buttonProps={{
          className: classes.navLink,
          color: "transparent",
        }}
        dropdownList={[
          <Link to="/" className={classes.dropdownLink}>
            Basic
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
            Graphic
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
            Croptop
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
            Polo
          </Link>,
        ]}
      />
    ),
  };
  const pant = {
    nested: true,
    item: (
      <CustomDropdown
        dropup={false}
        left={false}
        noLiPadding
        buttonText="Quần Vải"
        buttonProps={{
          className: classes.navLink,
          color: "transparent",
        }}
        dropdownList={[
          <Link to="/" className={classes.dropdownLink}>
            Quần ngắn
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
            Baggy
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
            Quần ống rộng
          </Link>,
        ]}
      />
    ),
  };
  const skirt = {
    nested: true,
    item: (
      <CustomDropdown
        dropup={false}
        left={false}
        noLiPadding
        buttonText="Chân váy"
        buttonProps={{
          className: classes.navLink,
          color: "transparent",
        }}
        dropdownList={[
          <Link to="/" className={classes.dropdownLink}>
            Chân váy
          </Link>,
          <Link to="/" className={classes.dropdownLink}>
            Quần giả váy
          </Link>,
        ]}
      />
    ),
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          dropup={true}
          left={true}
          noLiPadding
          buttonText="Quần Áo"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Áo Khoác
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Blazer
            </Link>,
            Jeans,
            Sweater,
            Jumsuit,
            shirt,
            tShirt,
            pant,
            skirt,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Phụ Kiện
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Sale Off
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Lookbook
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Sản Phẩm Mới
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
