import React from "react";
import {Grid, Select, Typography, MenuItem, FormControl} from "@mui/material";
import Container from "@mui/material/Container";
import Card from "../card/Card";
import styles from "./Auctions.module.scss";
import { useState } from "react";

export default function Auctions ({ cards = [{
    "name":"Ivy",
    "user":{
       "avatar":{
          "url":"images/avatar.png"
       },
       "verified":true
    },
    "mediaUrl":"images/nft.jpg",
    "price":1,
    "currency":"ETH",
    "timeLeft":132136
 },
 {
    "name":"Judie",
    "user":{
       "avatar":{
          "url":"images/avatar.png"
       },
       "verified":true
    },
    "mediaUrl":"images/nft.jpg",
    "price":2.3,
    "currency":"ETH",
    "timeLeft":132136
 },
 {
    "name":"Juniper",
    "user":{
       "avatar":{
          "url":"images/avatar.png"
       },
       "verified":true
    },
    "mediaUrl":"images/nft.jpg",
    "price":5,
    "currency":"ETH",
    "timeLeft":132136
 },
 {
    "name":"Maple",
    "user":{
       "avatar":{
          "url":"images/avatar.png"
       },
       "verified":true
    },
    "mediaUrl":"images/nft.jpg",
    "price":10,
    "currency":"ETH",
    "timeLeft":132136

 }]}) {
    const [time, setTime] = useState('');

  const handleChange = (event) => {
   setTime(event.target.value);
  };
    return(
        <div>
        <Container maxWidth="xl" >
            <div className={styles.headingWrapper}>
                <Typography variant="h2" align="left" className={styles.heading}>🔥 Live Auctions</Typography>
                <div className={styles.selectWrapper}>
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
