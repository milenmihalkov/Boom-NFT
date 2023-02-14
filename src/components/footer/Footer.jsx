import React from "react";
import Logo from "../logo/Logo";
import {Container,Grid, Button, Typography} from "@mui/material";
import styles from "./Footer.module.scss";

const Footer = ()=>{
    return(
    <div className={styles.wrapper}  >    
    <Container className={styles.container} maxWidth="false" >
        <Grid container justifyContent="space-between"  alignItems="center" >
            <Grid item >
                <Logo className={styles.logo} type={"muted"}/>
            </Grid>
            <Grid item >
                <Typography variant="body2" align="center" className={styles.copyRights}>Bum All Rights Reserved 2021</Typography>
            </Grid>
            <Grid item >
                <Button variant="text" className={styles.linkButton}>Privacy Policy</Button>
                <Button variant="text" className={styles.linkButton}>Cookie Policy</Button>
            </Grid>
        </Grid>
    </Container>
    </div>    
    )
}

export default Footer;