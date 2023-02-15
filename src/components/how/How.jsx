import React from 'react';
import { Grid, Typography, Button, Box, Container } from '@mui/material';
import Step from './Step';
import styles from './How.module.scss';

export default function How({
    description="",
    title="",
    items = [],
    link

}) {
    return (
        <Box className={styles.sectionHowWrapper}>
            <Box className={styles.sectionHowInnerWrapper}>
                <Container maxWidth="xl" > 
                    <Grid container  className={styles.sectionHowGridWrapper}>
                        <Grid item xs={8} >
                            <Box className={styles.contentWrapper}>
                                <Typography variant="h2">{title}</Typography>
                                <Typography variant="body1">{description}</Typography>
                                <Button variant="contained" href={link} className={styles.learnMoreBtn}>Learn more</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={4} className={styles.rightSideStep}>
                            {items.map((item, index) => (
                                <Grid item key={index}>
                                    <Step number={index + 1} title={item.title} description={item.description} />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Box>
        
      );
};
