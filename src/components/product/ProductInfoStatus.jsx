import { Chip, Circle } from "@mui/material";
import styles from "./ProductInfoStatus.module.scss";
import classNames from "classnames";

export default function ProductInfoStatus() {
        return(
            <div className={classNames(styles['product-info-status'])}>
                <Chip
                    color="secondary"
                    className={classNames(styles.status)}
                    variant="filled"
                    icon={<Circle></Circle>}
                    label={"LIVE"}
                />
            </div>
        )    
};
