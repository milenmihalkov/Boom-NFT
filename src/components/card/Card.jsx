import React from "react";
import millify from "millify";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import styles from "./Card.module.scss";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chip from "@mui/material/Chip";



export default function NftCard({
    name="Clock",
    likes   =1.1,
    mediaUrl="./images/nft.jpg",
    user    ={
        avatar:{
            url:'./images/avatar.png'
        },
        verified:true
    },
    price = 12.2,
    currency = "ETN"

}) {
    return(
        <Card className={classNames(styles.card)}>
            <CardHeader
                avatar={
                    <Avatar url={user.avatar.url} size={40} verified={user.verified}  className={classNames(styles.avatar)}/>
                }
            />
             <CardMedia
                component="img"
                image={mediaUrl}
                alt={name}
                className={classNames(styles.media)}
            />
            <CardContent>
                <Typography variant="body2" className={classNames(styles.detailsWrapper)}>
                    <div className={classNames(styles.infoWrapper)}>
                        <p className={classNames(styles.title)}>{name}</p>
                        <p className={classNames(styles.price)}>{price} {currency}</p>
                    </div>
                    <div className={classNames(styles.likesWrapper)}>
                        <Chip 
                            className={classNames(styles.likes)}  
                            label={millify(likes)} 
    
                            avatar={
                            <FavoriteIcon 
                                className={classNames(styles.icon)}
                            />
                            }
                        />
                    </div>
                </Typography>
            </CardContent>
        </Card>
    
        )
};
