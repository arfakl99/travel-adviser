import { Button } from "antd";
import React from "react";
import {
  Grid,
  AppBar,
  Toolbar,
  InputBase,
  Box,
  Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Autocomplete } from "@react-google-maps/api";
import useStyles from "../Navbar/styles";

function Navbar() {
  const classes = useStyles();
  return (
    // <div className="flex justify-between">
    //   <div>Travel Adviser</div>
    //   <div>Home</div>
    //   <div>Search you place</div>
    //   <div>
    //     <Button className="text-blue-600 bg-stone-300" type="primary">
    //       Search
    //     </Button>
    //   </div>
    // </div>
    <AppBar position="static">
      <Toolbar  className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>Travel Adviser</Typography>
        <Box display="flex" >
          <Typography variant="h6" className={classes.title}>
            Explkore new places
          </Typography>
        
          {/* <Autocomplete> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
            
          {/* </Autocomplete> */}

        </Box>
      </Toolbar>
    </AppBar>

  );
}

export default Navbar;
