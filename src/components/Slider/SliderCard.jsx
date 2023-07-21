//Material-UI
import { Box, Typography, Grid } from "@mui/material";

//React-CircularProgressbar and Styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
  return (
    <Box
      sx={{
        zIndex: 1,
        backgroundColor: props.color.primary,
        padding: "1.5rem",
        width: "250px",
        height: "200px",
      }}
    >
      <Typography sx={{ color: props.color.white }}>{props.text}</Typography>
      <Grid
        sx={{
          width: "140px",
          height: "100%",
          margin: "0 auto",
          display: "flex",
          alignContent: "center",
        }}
      >
        <CircularProgressbar
          value={props.percentage}
          text={`${props.percentage}%`}
          styles={buildStyles({
            // Colors
            pathColor: props.color.secondary,
            textColor: props.color.white,
            trailColor: `rgba(100,100,100,0.25)`,
          })}
        />
      </Grid>
    </Box>
  );
};

export default Card;
