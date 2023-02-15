import React from "react";
import {Grid, Select, Typography, MenuItem, FormControl} from "@mui/material";
import Container from "@mui/material/Container";
import Card from "../card/Card";
import styes from "./Trending.module.scss";
import { useState } from "react";

export default function Trending ({ cards = [{
    "name":"Ivy",
    "user":{
       "avatar":{
          "url":"images/avatar.png"
       },
       "verified":true
    },
    "mediaUrl":"images/nft.jpg",
    "price":1,
    "currency":"ETH"
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
    "currency":"ETH"
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
    "currency":"ETH"
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
    "currency":"ETH"
 }]}) {
    const [time, setTime] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
    return(
        <div>
        <Container maxWidth="xl" >
            <div className={styes.headingWrapper}>
                <Typography variant="h2" align="left" className={styes.heading}>Trending</Typography>
                <div className={styes.selectWrapper}>
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <Select
                            defaultValue={1}
                            onChange={handleChange}
                        >
                            <MenuItem value={1}>This week</MenuItem>
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
                    />
                </Grid>
                ))}
            </Grid>
        </Container>
        </div>
    )
};
