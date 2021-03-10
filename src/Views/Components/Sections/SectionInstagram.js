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
import frontImg1 from "../../../assets/img/Instagram/155320600_241743190620030_4273183978793845272_n.jpg";
import backImg1 from "../../../assets/img/Instagram/155822437_454481635746900_145280681426938794_n.jpg";
import frontImg2 from "../../../assets/img/Instagram/155970125_1360738730975543_6659777967715180407_n.jpg";
import backImg2 from "../../../assets/img/Instagram/156552240_750497718937658_4311951318441747949_n.jpg";
import frontImg3 from "../../../assets/img/Instagram/156592626_475017016851837_8975050789213616203_n.jpg";
import backImg3 from "../../../assets/img/Instagram/157312572_478001386947693_2923371051063820688_n.jpg";
import frontImg4 from "../../../assets/img/Instagram/157382679_3228185807285130_6548418219903440067_n.jpg";
import backImg4 from "../../../assets/img/Instagram/157738400_265649788419257_5859276671678164842_n.jpg";
import frontImg5 from "../../../assets/img/Instagram/158076256_1260757634326221_2376380031747776604_n.jpg";
import backImg5 from "../../../assets/img/Instagram/158467628_270557861342684_7970957903339255778_n.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    padding: "70px 10px",
  },
  gridList: {
    width: "100%",
    height: "100%",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  titleBar: {
    textAlign: "center",
  },
}));

const SectionInstagram = (props) => {
  const classes = useStyles();
  const ListImage = [
    { img: frontImg, subImg: backImg, alt: "test-img" },
    { img: backImg, subImg: backImg, alt: "test-img" },
    { img: frontImg1, subImg: backImg, alt: "test-img" },
    { img: backImg1, subImg: backImg, alt: "test-img" },
    { img: frontImg2, subImg: backImg, alt: "test-img" },
    { img: backImg2, subImg: backImg, alt: "test-img" },
    { img: frontImg3, subImg: backImg, alt: "test-img" },
    { img: backImg3, subImg: backImg, alt: "test-img" },
    { img: frontImg4, subImg: backImg, alt: "test-img" },
    { img: backImg4, subImg: backImg, alt: "test-img" },
    { img: frontImg5, subImg: backImg, alt: "test-img" },
    { img: backImg5, subImg: backImg, alt: "test-img" },
  ];

  return (
    <div className={classes.root}>
      <GridList
        cellHeight={"auto"}
        spacing={3}
        className={classes.gridList}
        cols={6}
      >
        {ListImage.map((tile) => (
          <GridListTile
            key={tile.img}
            cols={tile.featured ? 2 : 1}
            rows={tile.featured ? 2 : 1}
          >
            <img src={tile.img} alt={tile.title} style={{ width: "100%" }} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default SectionInstagram;
