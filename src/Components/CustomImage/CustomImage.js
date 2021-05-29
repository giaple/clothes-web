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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const CustomImage = (props) => {
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  const mouseEnter = () => {
    if (!props.sub) return;
    setHover(true);
  };

  const mouseLeave = () => {
    if (!props.sub) return;
    setHover(false);
  };
  const imgSrc = hover ? props.sub : props.img;
  return (
    <div onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <img src={imgSrc} alt={props.img} style={{width: '100%'}} />
      {hover ? (
        <GridListTileBar
          actionIcon={
            <IconButton
              aria-label={`xem nhanh`}
              className={classes.icon}
            />
          }
        />
      ) : null}
    </div>
  );
};

export default CustomImage;