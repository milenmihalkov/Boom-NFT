import { Typography } from "@mui/material";
import styles from "./ProductInfoTitle.module.scss";

export default function ProductInfoTitle({text}) {
    return(
        <div className={styles['product-info-title']}>
            <Typography className={styles.title}>{text}</Typography>
        </div>
    )    
};
