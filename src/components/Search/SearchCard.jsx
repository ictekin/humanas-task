import { Card, Grid, Typography, Chip, IconButton } from "@mui/material";

import styles from "./SearchCard.module.css";

//Circular-Progressbar and Styles
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//Assets
import Profile from "../../assets/profile.jpg";

//Icons
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Dot from "@mui/icons-material/FiberManualRecord";

const SearchCard = (props) => {
  return (
    <Card container className={styles.container}>
      <Grid
        item
        xs={12}
        sm={12}
        md={2}
        lg={2}
        xl={2}
        className={styles.outerCircle}
      >
        <div className={styles.innerCircle}>
          <CircularProgressbarWithChildren
            value={props?.metaCVCompletionRate ?? 33}
          >
            <img
              style={{ width: 75, borderRadius: "50%" }}
              src={Profile}
              alt="doge"
            />
          </CircularProgressbarWithChildren>
        </div>
      </Grid>
      <Grid item xs={12} sm={12} md={10} lg={10} xl={10}>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{ width: "100%", marginTop: "1rem" }}
        >
          <Typography
            sx={{ fontWeight: "bold" }}
          >{`${props.name} ${props.surname}`}</Typography>
        </Grid>
        <Grid sx={{ width: "100%", marginTop: "1rem" }}>
          <Typography>{props.title}</Typography>
        </Grid>
        <Grid
          sx={{
            width: "100%",
            marginTop: "1rem",
            display: "flex",
            gap: "1rem",
            color: "#F4A622",
          }}
        >
          <Typography>{props.developerType}</Typography>
          {props.skills.map((value, index) => {
            return (
              <Typography key={index}>
                <Dot sx={{ fontSize: 9 }} /> {value.name}
              </Typography>
            );
          })}
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          className={styles.buttons}
          sx={{ width: "100%", marginTop: "1rem" }}
        >
          {props.charts.map((value, index) => {
            return (
              <Chip
                key={index}
                sx={{ backgroundColor: value.bgColor }}
                label={`%${value.rate}`}
              />
            );
          })}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={3}
        sx={{ width: "100%", marginTop: "1rem" }}
      >
        <Grid container className={styles.custom}>
          <Grid item>
            <IconButton
              sx={{
                width: "175px",
                height: "62px",
                backgroundColor: "#F4A622",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <Typography>View Meta CV</Typography>
              <ArrowForwardIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              sx={{
                width: "175px",
                height: "62px",
                backgroundColor: "#0060AD",
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              <Typography>Order</Typography>
              <ArrowForwardIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default SearchCard;
