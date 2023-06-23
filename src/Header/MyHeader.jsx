import React, { useState } from 'react';

import { Autocomplete } from '@mui/material';
import { AppBar, Toolbar, Typography, InputBase, Box, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

export const MyHeader = ({ options, onClick, onChange, value }) => {
  const classes = useStyles();


  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
          <Autocomplete
          id="combo-box"
            renderInput={(props) => <TextField {...props} id={props.InputProps.id} />}
            options={options}
            value={value}
            onChange={onChange}
            style={{width:250}}
          >
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

