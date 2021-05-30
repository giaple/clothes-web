import React, { useState } from "react";
import classes from './CustomImage.module.scss';

const CustomImage = (props) => {
  const [hover, setHover] = useState(false);

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
    <div className={classes.container} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <img src={imgSrc} alt={props.img} style={{width: '100%'}} />
      {hover ? (
        <div className={classes.btn} onClick={props.showInfo}> Xem Nhanh</div>
      ) : null}
    </div>
  );
};

export default CustomImage;