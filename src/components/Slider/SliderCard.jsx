//Material-UI
import { Box, Typography, Grid } from "@mui/material";

//React-CircularProgressbar and Styles
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Card = (props) => {
  return (
    <Box sx={{ zIndex: 1, backgroundColor: props.color.primary }}>
      <Typography sx={{ margin: "1.5rem", color: props.color.white }}>
        {props.text}
      </Typography>
      <Grid sx={{ width: "120px", margin: "0 auto" }}>
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
