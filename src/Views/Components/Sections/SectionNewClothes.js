import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  ListSubheader,
  makeStyles,
  withWidth,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";

import frontImg from "../../../assets/img/Instagram/15 (4)_-14-01-2021-21-31-17.jpg";
import backImg from "../../../assets/img/Instagram/18 (3)_-14-01-2021-21-30-08.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    padding: "70px 0",
  },
  gridList: {
    width: "85%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  titleBar: {
    textAlign: "center",
  },
}));

const SectionNewClothes = (props) => {
  const [cols, setCols] = useState(5);
  const classes = useStyles();
  const ListImage = [
    { img: frontImg, subImg: backImg, alt: "test-img" },
    { img: frontImg, subImg: backImg, alt: "test-img" },
    { img: frontImg, subImg: backImg, alt: "test-img" },
    { img: frontImg, subImg: backImg, alt: "test-img" },
    { img: frontImg, subImg: backImg, alt: "test-img" },
    { img: frontImg, subImg: backImg, alt: "test-img" },
    { img: frontImg, subImg: backImg, alt: "test-img" },
    { img: frontImg, subImg: backImg, alt: "test-img" },
    { img: frontImg, subImg: backImg, alt: "test-img" },
    { img: frontImg, subImg: backImg, alt: "test-img" },
  ];

  const handleResponsive = () => {
    switch (props.width) {
      case "xs":
        setCols(2);
        break;
      case "sm":
        setCols(3);
        break;
      case "md":
        setCols(3);
        break;
      case "lg":
        setCols(4);
        break;
      default:
        setCols(5);
        break;
    }
  };

  useEffect(() => {
    handleResponsive();
  }, [props.width]);

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={"auto"}
        spacing={10}
        className={classes.gridList}
        cols={cols}
      >
        {ListImage.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} style={{ width: "100%" }} />
            {cols < 5 ? null : (
              <GridListTileBar
                onClick={() => {console.log('xxxxxxxxxxxx',tile)}}
                title={"Xem Nhanh"}
                titlePosition="bottom"
                actionPosition="left"
                className={classes.titleBar}
              />
            )}
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default withWidth()(SectionNewClothes);
