import React from "react";

const ImageList = (props) => {
  const render = props.images.map((image, index) => (
    <img src={image} alt={index} style={props.imageStyle} onClick={() => {props.onClick(index)}}/>
  ));
  return <div style={props.customStyle}>{render}</div>;
};

export default ImageList;
