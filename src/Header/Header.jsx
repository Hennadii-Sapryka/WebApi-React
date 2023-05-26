import React from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField/TextField';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/';

export const Header = () => {
    return (

        <div style={{ backgroundColor: "pink" }}>
            <Typography variant='h4'>
                U S E R S
            </Typography>
            <TextField label='Search for...' variant='outlined' />
            <div
                style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', padding: '5px 40px 5px 5px' }}>
                <Typography >Dictance</Typography>
                <Slider style={{ width: '75%' }}></Slider>
            </div>
            <div>
                <Button variant='outlined'>Resset</Button>
                <Button variant='contained'>Search</Button>
            </div>
        </div>
    );
}

