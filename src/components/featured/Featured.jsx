import React from "react";
import styles from "./Featured.module.scss";
import Container from "@mui/material/Container";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useRouter } from "next/dist/client/router";


export default function Featured({items=[]}) {

    const router = useRouter();

    const handleClick = (e,href) => {
        e.preventDefault();
        router.push(href);
      };
    return(
        <Container maxWidth="xl" >
            <ImageList cols={6} className={styles.imageListWrapper} gap={30}>
          {items.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                className={styles.imgage}
                src={item.image}
                alt={item.title}
                onClick={(e) => handleClick(e, item.href)}
              />
            </ImageListItem>
          ))}
        </ImageList>
        </Container>
    )
};
