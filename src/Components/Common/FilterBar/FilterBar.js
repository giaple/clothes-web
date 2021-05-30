import React from 'react';

import SearchIcon from '@material-ui/icons/Search';
import CustomDropdown from '../../CustomDropdown/CustomDropdown';
import { ColorDropDownModel, SizeDropDownModel } from '../../../utils/models';
import CustomMenuItem from '../MenuItem/MenuItem';
import RegularButton from '../../CustomButtons/Button';

import classes from './FilterBar.module.scss'

const FilterBar = (props) => {

    const menuSize = SizeDropDownModel.map(item => {
        return <CustomMenuItem name={item.name} key={`${item.name} - ${item.value}`} select={props.setSizeText} />
    })

    const menuColor = ColorDropDownModel.map(item => {
        return <CustomMenuItem name={item.name} key={`${item.name} - ${item.value}`} select={props.setColorText} />
    })

    return (
        <div className={classes.filter}>
            <CustomDropdown
                dropup={false}
                left={false}
                noLiPadding
                buttonText={props.sizeText}
                buttonProps={{
                    color: "transparent",
                }}
                dropdownList={menuSize}
            />
            <CustomDropdown
                dropup={false}
                left={false}
                noLiPadding
                buttonText={props.colorText}
                buttonProps={{
                    color: "transparent",
                }}
                dropdownList={menuColor}
            />
            <RegularButton
                onClick={props.filterAction}
            >
                <SearchIcon />
            </RegularButton>
        </div>
    )
}

export default FilterBar;