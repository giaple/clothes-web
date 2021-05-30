import React from 'react';

import classes from './MenuItem.module.scss'

const CustomMenuItem = props => {
    return (
        <div className={classes['menu-item']} style={props.style} key={props.key} onClick={() => { props.select(props.name) }}>
            {props.name}
        </div>
    )
}

export default CustomMenuItem;