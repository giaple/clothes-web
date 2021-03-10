import { GridListTile, GridListTileBar, IconButton, makeStyles } from "@material-ui/core";
import React, { useState } from "react";


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }));

const CustomImage = (props) => {
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  const mouseEnter = () => {
    setHover(true);
  };

  const mouseLeave = () => {
    setHover(false);
  };
  const imgSrc = hover ? props.sub : props.img;
  return (
    <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <GridListTile key={props.img}>
        <img src={imgSrc} alt={props.img} />
        {!hover ? (
          <GridListTileBar
            actionIcon={
              <IconButton
                aria-label={`xem nhanh`}
                className={classes.icon}
              />
            }
          />
        ) : null}
      </GridListTile>
    </div>
  );
};

export default CustomImage;