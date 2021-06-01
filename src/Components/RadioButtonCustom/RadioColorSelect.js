import React, { useState } from "react";

import { makeStyles } from "@material-ui/core/styles";

const radioContainer = {
  container: {
    width: "auto",
    borderBottom: "1px solid",
    padding: "0 0 25px",
  },
  formLable: {
    backgroundColor: "#dc5c5c",
    padding: "5px",
    color: "white",
    marginLeft: "5px",
  },
  radioGroupStyle: {
    marginLeft: "16px",
  },
  attContentBox: {
    display: "flex",
  },
  attContentColorItem: {
    width: "40px",
    height: "40px",
    border: "1px solid rgba(0, 0, 0, .5)",
    opacity: "0.5",
    padding: "8px",
    marginTop: "5px",
    marginRight: "5px",
    display: 'flex'
  },
  attContentItemInner: {
    width: "24px",
    height: "24px",
  }
};

const useStyles = makeStyles(radioContainer);

export default function RadioColorSelect(props) {
  const classes = useStyles();

  const renderColorBtns = props.colors.map(color => {
    return <div
      className={classes.attContentColorItem}
      style={{ borderColor: color.name === props.selected ? color.name : '' }}
      onClick={() => { props.selectColor(color.name) }}
    >
      <div className={classes.attContentItemInner} style={{ backgroundColor: color.name }}></div>
    </div>
  })

  return (
    <div className={classes.attContentBox}>
      {renderColorBtns}
    </div>
  );
}
