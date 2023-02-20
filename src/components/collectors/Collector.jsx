import styles from "./Collector.module.scss";
import User from "../user/User";
import {Typography, Box} from '@mui/material';

export default function Collector({
    name, 
    avatar,
    verified,
    type, 
    nftsCount,
    id  
}) {

    const switBg = `${styles.collectorWrapper} ${type==='dark' ? styles.darkBg : styles.lightBg}`;
    
        return(
            <Box className={styles.container}>
                <Box className={switBg}>
                    <Box className={styles.numberWrapper}>
                        <Typography className={styles.number}>{id}</Typography>
                    </Box>
                    <Box className={styles.collectorInfoWrapper}>
                        <User name={name} avatar={avatar} verified={verified} info={nftsCount} id={id}/>
                    </Box>
                </Box>
            </Box>
        )
};
