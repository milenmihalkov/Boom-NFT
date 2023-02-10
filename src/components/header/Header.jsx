import React from "react";
import Logo from "../logo/Logo";
import {Container,Grid,TextField, InputAdornment, Button} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import classNames from "classnames";
import styles from "./Header.module.scss";

const Header = ()=>{
    return(
    <div className={styles.wrapper}  >    
    <Container className={styles.container} maxWidth="false" >
        <Grid container justifyContent="space-between"  alignItems="center" >
            <Grid item >
                <Logo className={styles.logo}/>
            </Grid>
            <Grid item xs={4}>
                <TextField 
                id="outlined-basic" 
                variant="outlined"  
                placeholder="Find items, users and activities"
                size="small"
                className={styles.searchField} 
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchIcon className={styles.searchIcon}/></InputAdornment>,
                  }}/>
            </Grid>
            <Grid item >
                <Button variant="text" className={styles.linkButton}>Home</Button>
                <Button variant="text" className={styles.linkButton}>Activity</Button>
                <Button variant="contained" size="small" className={styles.buttonText}>EXPLORE</Button>
            </Grid>
        </Grid>
    </Container>
    </div>    
    )
}

export default Header;