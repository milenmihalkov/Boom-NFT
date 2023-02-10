import React from 'react';
import style from "./Avatar.module.scss";


export default function Avatar ({ size = 90, url = "/images/avatar.png", verified = false }) {

    return (
      <div className={style.avatar} style={{ width: size, height: size }}>
        <img src={url} className={style.image} />
        {verified && (
          <img src='/images/verified.svg' className={style.badge} />
        )}
      </div>
    );
  };
