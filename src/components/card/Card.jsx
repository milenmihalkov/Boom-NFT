import React from "react";
import millify from "millify";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";
import styles from "./Card.module.scss";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Chip from "@mui/material/Chip";
import Countdown from 'react-countdown';



export default function NftCard({
    name="",
    likes=0,
    mediaUrl="",
    user    ={
        avatar:{
            url:""
        },
        verified:false
    },
    price = "",
    currency = ""

}) {
    
    return(
        <Card className={classNames(styles.card)}>
            <CardHeader
                avatar={
                    <Avatar url={user.avatar.url} size={40} verified={user.verified}  className={classNames(styles.avatar)}/>
                }
            />
            <div className={styles.cardMediaWrapper}>
                <CardMedia
                    component="img"
                    image={mediaUrl}
                    alt={name}
                    className={classNames(styles.media)}
                />
                <div>TEST</div>
            </div>
            <CardContent>
                <Typography variant="body2" className={classNames(styles.detailsWrapper)}>
                    <div className={classNames(styles.infoWrapper)}>
                        <div className={classNames(styles.title)}>{name}</div>
                        <div className={classNames(styles.price)}>~{price} {currency}</div>
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
