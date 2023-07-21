//Material-UI
import { Box, LinearProgress, Typography } from "@mui/material";

//Styles
import styles from "./ContentCard.module.css";

const ContentCard = (props) => {
  return (
    <Box className={styles.container}>
      <Box item className={styles.cardHeader}>
        <Typography>{props.title}</Typography>
        <Typography>{`%${props.percentage}`}</Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <LinearProgress
          variant="determinate"
          value={props.percentage}
          sx={{
            width: "100%",
            height: "15px",
            background: "#EAECEF",
            "> span": {
              backgroundColor:
                "transparent linear-gradient(90deg, #C7EEFD 0%, #3574C7 100%)",
            },
          }}
        />
      </Box>

      <Box>
        <Typography>{props.description}</Typography>
      </Box>
    </Box>
  );
};

export default ContentCard;
