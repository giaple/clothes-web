import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const radioContainer = {
    container: {
        width: 'auto'
    },
    formLable: {
        backgroundColor: '#dc5c5c',
        padding: '5px',
        color: 'white',
        marginLeft: '5px'
    },
    radioGroupStyle: {
        marginLeft: '16px',
    }

}

const useStyles = makeStyles(radioContainer);

export default function RadioColorSelect(props) {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState('brown');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className={classes.container}>
            <FormControl component="fieldset">
                <FormLabel className={classes.formLable} component="legend">Color</FormLabel>
                <RadioGroup className={classes.radioGroupStyle} row aria-label="color" name="color" value={selectedValue} style={{ width: 'auto' }} onChange={handleChange}>
                    <FormControlLabel value="brown" control={<Radio />} label="Brown" />
                    <FormControlLabel value="red" control={<Radio />} label="Red" />
                    <FormControlLabel value="purple" disabled control={<Radio />} label="Purple" />
                    <FormControlLabel value="white" control={<Radio />} label="White" />
                </RadioGroup>
            </FormControl>
        </div>
    );
}
