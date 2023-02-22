import Collector from "./Collector";
import {Typography, Box} from '@mui/material';
import styles from "./CollectorColumn.module.scss";

export default function CollectorColumn({items =[]}) {
    return(
        <Box className={styles.columnContainer}>
            {items.map((item, index)=>(
            <Box key={item.id}>
                <Collector
                    name={item.name}
                    avatar={item.avatar}
                    verified={item.verified}
                    type={item.type}
                    nftsCount={item.nftsCount}
                    id ={item.id}
                />
            </Box>
            ))}
        </Box>
    )
}