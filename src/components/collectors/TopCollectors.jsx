import {Grid, Select, Typography, MenuItem, FormControl, Box} from "@mui/material";
import Container from "@mui/material/Container";
import CollectorColumn from "./CollectorColumn";
import chunk from "lodash.chunk";
import styles from "./TopCollectors.module.scss";
import { useState } from "react";

export default function TopCollectors({collectors=[
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"light",
        "nftsCount":"34 items",
        "id":1
    },
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"dark",
        "nftsCount":"34 items",
        "id":2
    },
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"light",
        "nftsCount":"34 items",
        "id":3
    },
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"light",
        "nftsCount":"34 items",
        "id":4
    },
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"dark",
        "nftsCount":"34 items",
        "id":5
    },
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"light",
        "nftsCount":"34 items",
        "id":6
    },
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"light",
        "nftsCount":"34 items",
        "id":7
    },
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"dark",
        "nftsCount":"34 items",
        "id":8
    },
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"light",
        "nftsCount":"34 items",
        "id":9
    },
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"light",
        "nftsCount":"34 items",
        "id":10
    },
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"dark",
        "nftsCount":"34 items",
        "id":11
    },
    {
        "name":"Milen",
        "avatar":"../images/avatar.png",
        "verified":"true",
        "type":"light",
        "nftsCount":"34 items",
        "id":12
    },
]}) {
    

    const [sort, setSort] = useState('');
    const handleChange = (event) => {
     setSort(event.target.value);
    };

//  const chunkedCollectors = chunk(collectors.map((collector, index) => ({...collector, id: index + 1, key: index + 1})),3);
    const chunkedCollectors = chunk(collectors.map(({id, ...rest}, index) => ({...rest, id: index + 1, key: index + 1})),3);

    return(

        
        <Container maxWidth="xl">
            <Box className={styles.headingWrapper}>
                <Typography variant="h2" align="left" className={styles.heading}>Top Collectors</Typography>
                <Box className={styles.selectWrapper}>
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <Select defaultValue={1} onChange={handleChange}  >
                            <MenuItem value={1}>Sort by</MenuItem>
                            <MenuItem value={2}>Id</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </Box>
            <Box className={styles.contentWrapper}>
            <Grid container spacing={2}>
                {chunkedCollectors.map((chunkedCollector, index) => (
                    <Grid item xs={3} id={index} key={index}>
                        <CollectorColumn items={chunkedCollector} />
                    </Grid>
                ))}
            </Grid>
            </Box>
                        
        </Container>
    )
};
