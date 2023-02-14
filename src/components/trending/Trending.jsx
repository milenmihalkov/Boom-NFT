import {Container, Grid, Select, Typography, MenuItem, FormControl} from "@mui/material";
import Card from "../card/Card";
import styes from "./Trending.module.scss";

export default function Trending ({ cards = []}) {
    
    return(
        <Container maxWidth="sx" >
            <div className={styes.headingWrapper}>
                <Typography variant="h2" align="left" className={styes.heading}>Trending</Typography>
                <div className={styes.selectWrapper}>
                    <FormControl sx={{ m: 1, minWidth: 220 }}>
                        <Select/>
                            {/* <MenuItem value={1}>This week</MenuItem>
                        </Select> */}
                    </FormControl>
                </div>
            </div>
            <Grid container spacing={2}>
                {cards.map(card => (
                <Grid item xs={3} key={card.name}>
                    <Card card={card} />
                    {/* {console.log(card)} */}
                </Grid>
                ))}
            </Grid>
        </Container>
    )
};
