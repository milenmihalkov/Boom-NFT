import React from "react";
import Logo from "../logo/Logo";
import {Container,Grid,TextField, InputAdornment, Button} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classNames from "classnames";
import style from "./Header.module.scss";

const Header = ()=>{
    return(
    <div className={style.wrapper}  >    
    <Container className={style.container} maxWidth="false" >
        <Grid container justifyContent="space-between"  alignItems="center" >
            <Grid item >
                <Logo className={style.logo}/>
            </Grid>
            <Grid item xs={4}>
                <TextField 
                id="outlined-basic" 
                variant="outlined"  
                placeholder="Find items, users and activities"
                size="small"
                className={style.searchField} 
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon className={style.searchIcon}/></InputAdornment>,
                  }}/>
            </Grid>
            <Grid item >
                <Button variant="text" className={style.linkButton}>Home</Button>
                <Button variant="text" className={style.linkButton}>Activity</Button>
                <Button variant="contained" size="small" className={style.buttonText}>EXPLORE</Button>
            </Grid>
        </Grid>
    </Container>
    </div>    
    )
}

export default Header;