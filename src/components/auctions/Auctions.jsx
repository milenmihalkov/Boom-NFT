import React from "react";
import {Grid, Select, Typography, MenuItem, FormControl} from "@mui/material";
import Container from "@mui/material/Container";
import Card from "../card/Card";
import styes from "./Auctions.module.scss";
import { useState } from "react";

export default function Auctions ({ cards = []}) {
    const [time, setTime] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return(
        <div>
        <Container maxWidth="sx" >
            <div className={styes.headingWrapper}>
                <Typography variant="h2" align="left" className={styes.heading}>🔥 Live Auctions</Typography>
                <div className={styes.selectWrapper}>
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <Select
                            defaultValue={1}
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>Price range</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <Grid container spacing={2}>
                {cards.map(card => (
                <Grid item xs={3} key={card.name}>
                    <Card 
                        name    ={card.name}
                        likes   ={123}
                        mediaUrl={card.mediaUrl}
                        user    ={card.user}
                        price   ={card.price}
                        currency={card.currency}
                        timeLeft={card.timeLeft}
                    />
                </Grid>
                ))}
            </Grid>
        </Container>
        </div>
    )
};
