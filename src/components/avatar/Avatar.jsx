import React from 'react';
import styles  from "./Avatar.module.scss";


const Avatar = ({ size = 90, url = "/images/avatar.png", verified = true }) => {
    
    return (
      <div className={styles.avatar} style={{ width: size, height: size }}>
        <img src={url} className={styles.image} />
        {verified && (
          <img src='/images/verified.svg' className={styles.badge} />
        )}
      </div>
    );
  };

export default Avatar;