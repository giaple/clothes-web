import React from 'react';

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
    border: "2.5px solid rgba(0, 0, 0, .5)",
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
}
const useStyles = makeStyles(radioContainer);

export default function RadioColorSelect(props) {
  const classes = useStyles();

  const setSelectSize = (size, index, selectSize) => {
    console.log('dmcs size', size, index)
    let newSize = [...props.sizes]
    newSize[index].selected = !size.selected
    console.log('dmcs new sizen', newSize)
    selectSize(newSize);
  }

  const renderColorBtns = props.sizes.map((size, index) => {
    return <div
      className={classes.attContentColorItem}
      style={{ borderColor: !size.selected ? '' : 'red' }}
      onClick={() => { setSelectSize(size, index, props.selectSize, ) }}
    >
      <div className={classes.attContentItemInner}>{size.name}</div>
    </div>
  })

  return (
    <div className={classes.attContentBox}>
      {renderColorBtns}
    </div>
  )
}