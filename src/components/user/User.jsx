import React from "react";
import classNames  from "classnames";
import styles from "./User.module.scss";
import Avatar from "../avatar/Avatar";


export default function User({name="", info="", avatar="/images/avatar.png", size="55", verified=false}) {

    return(
        <div className={classNames(styles.user)}>
            <Avatar size={size} verified={verified} url={avatar}/>
            <div>
                <div className={classNames(styles.name)}>{name}</div>
                <div className={classNames(styles.info)}>{info}</div>
            </div>
        </div>
    )
    
};
