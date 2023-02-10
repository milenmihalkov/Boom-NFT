import React from "react";
import classNames  from "classnames";
import style from "./User.module.scss";
import Avatar from "../avatar/Avatar";


export default function User({name="", info="", avatar="/images/avatar.png", size="55", verified=false}) {

    return(
        <div className={classNames(style.user)}>
            <Avatar size={size} verified={verified} url={avatar}/>
            <div>
                <div className={classNames(style.name)}>{name}</div>
                <div className={classNames(style.info)}>{info}</div>
            </div>
        </div>
    )
    
};
