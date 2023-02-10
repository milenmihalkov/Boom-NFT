import React from "react";
import style from "./User.module.scss";
import Avatar from "../avatar/Avatar";


export default function User({name="", info="", avatar="", size="55", verified="false"}) {

    return(
        <div className={style.user}>
            <Avatar size={size}/>
            <div className="name">{name}</div>
            <div className="info">{info}</div>
        </div>
    )
    
};
