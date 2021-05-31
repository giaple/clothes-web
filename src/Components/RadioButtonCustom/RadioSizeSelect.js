import React, { useState } from 'react';

import { makeStyles } from "@material-ui/core/styles";

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const radioContainer = {
    container: {
        width: 'auto',
        borderBottom: '1px solid',
        padding: '0 0 25px'
    },
    formLable: {
        backgroundColor: '#dc5c5c',
        padding: '8px',
        color: 'white',
        marginLeft: '5px'
    },
    radioGroupStyle: {
        marginLeft: '16px',
    }
}

const useStyles = makeStyles(radioContainer);

export default function RadioSizeSelect(props) {
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState('brown');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className={classes.container}>
            <FormControl component="fieldset">
                <FormLabel className={classes.formLable} component="legend">Size</FormLabel>
                <RadioGroup className={classes.radioGroupStyle} row aria-label="color" name="color" value={selectedValue} style={{ width: 'auto' }} onChange={handleChange}>
                    <FormControlLabel value="size1" control={<Radio />} label="<34mm" />
                    <FormControlLabel value="size2" control={<Radio />} label="34mm-38mm" />
                    <FormControlLabel value="size3" disabled control={<Radio />} label="39mm-42mm" />
                    <FormControlLabel value="size4" control={<Radio />} label="43mm-46mm" />
                </RadioGroup>
            </FormControl>
        </div>
    );
}
