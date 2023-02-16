import React from 'react';
import styles from "./Step.module.scss";
import {Typography, Grid, Box } from '@mui/material';

export default function Step({number,title,description}) {
    return (

        <Box className={styles.stepWrapper}>
            <Grid container sx={{ display: "flex", alignItems : "center",justifyContent: "space-evenly" }}>
                <Grid item xs={4} className={styles.stepNumberWrapper} sx={{backgroundColor: "rgba(colors.$primary_main, 0.1)"}}>
                    <Typography className={styles.stepNumber}>{number}</Typography>
                </Grid>
                <Grid item xs={8} className={styles.stepContentWrapper}>
                    <Typography className={styles.stepTitle}>{title}</Typography>
                    <Typography className={styles.stepDescription}>{description}</Typography>
                </Grid>
            </Grid>
        </Box>
      );
};
