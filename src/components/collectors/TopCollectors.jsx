import {Grid, Select, Typography, MenuItem, FormControl, Box} from "@mui/material";
import Container from "@mui/material/Container";
import chunk from "lodash.chunk";
import styles from "./TopCollectors.module.scss";
import { useState } from "react";

import CollectorColumn from "./CollectorColumn";

// export default function TopCollectors({collectors=[]}) {
    

//     const [sort, setSort] = useState('');
//     const handleChange = (event) => {
//      setSort(event.target.value);
//     };

//     const chunkedCollectors = chunk(collectors.map(({id, ...rest}, index) => ({...rest, id: index + 1, key: index + 1})),3);

//     return(

        
//         <Container maxWidth="xl">
//             <Box className={styles.headingWrapper}>
//                 <Typography variant="h2" align="left" className={styles.heading}>Top Collectors</Typography>
//                 <Box className={styles.selectWrapper}>
//                     <FormControl sx={{ m: 1, minWidth: 220 }}>
//                         <Select defaultValue={1} onChange={handleChange}  >
//                             <MenuItem value={1}>Sort by</MenuItem>
//                             <MenuItem value={2}>Id</MenuItem>
//                         </Select>
//                     </FormControl>
//                 </Box>
//             </Box>
//             <Box className={styles.contentWrapper}>
//             <Grid container spacing={2}>
//                 {chunkedCollectors.map((chunkedCollector, index) => (
//                     <Grid item xs={3} id={index} key={index}>
//                         <CollectorColumn items={chunkedCollector} />
//                     </Grid>
//                 ))}
//             </Grid>
//             </Box>
                        
//         </Container>
//     )
// };
export default function TopCollectors({ collectors = [] }) {
    const chunkCollectors = chunk(
      collectors.map((collector, index) => ({
        ...collector,
        id: index + 1,
        key: index + 1,
      })),
      3
    );
  
    return (
      <div>
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <h1 className={styles.header}>Top Collectors</h1>
            <Select
              sx={{
                width: "220px",
                height: "50px",
                borderRadius: "30px",
              }}
            >
              <MenuItem value={1}>Sort by</MenuItem>
            </Select>
          </Box>
          <Grid container spacing={2}>
            {chunkCollectors.map((chunkCollector, index) => (
              <Grid item xs={3} id={index} key={index}>
                <CollectorColumn items={chunkCollector} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
