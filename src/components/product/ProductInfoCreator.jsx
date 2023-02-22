import styles from "./ProductInfoCreator.module.scss";
import classNames from "classnames";

export default function ProductInfoCreator({name,avatar,verified=false}) {
    return(
        <div className={classNames(styles['product-info-creator'])}>

        </div>
    )
};
