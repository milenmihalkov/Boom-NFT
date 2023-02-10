// import React from 'react';
// import classNames from "classnames";
// import style from "./Avatar.module.scss";


// export default function Avatar ({ size = 90, url, verified = false }) {

//     return (
//       <div style={{ width: size, height: size }} className={classNames(style.avatar)} >
//         <img src={url} className={classNames(style.image)} />
//         {verified && (
//           <img src='/images/verified.svg' className={classNames(style.badge)} />
//         )}
//       </div>
//     );
//   };

import classNames from "classnames";
import styles from "./Avatar.module.scss";

export default function Avatar({style, size = 90, verified = false, url }) {
  return (
    <div
        style={{ width: size + "px", height: size + "px" }}
        className={classNames(styles.avatar)}
    >
      <img src={url} alt="Avatar" className={classNames(styles.image)} />
      {verified && (
        <img src="/images/verified.svg" className={classNames(styles.badge)} />
      )}
    </div>
  );
}