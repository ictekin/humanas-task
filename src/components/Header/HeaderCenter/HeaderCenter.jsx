//Material-UI
import { Grid, Typography } from "@mui/material";

//Circular-Progressbar and Styles
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//Assets
import Profile from "../../../assets/profile.jpg";

//Styles
import styles from "./HeaderCenter.module.css";

//Redux
import { useSelector } from "react-redux";

const HeaderCenter = () => {
  const userDetailState = useSelector(
    (state) => state.userDetail.result?.userDetail
  );

  return (
    <Grid container className={styles.container}>
      <Grid
        item
        className={styles.profileWithText}
        xs={12}
        sm={12}
        md={5}
        lg={5}
      >
        <Grid>
          <Typography sx={{ color: "#fff", fontSize: "32px" }}>
            Hello, {userDetailState?.name + " " + userDetailState?.surname}
          </Typography>
        </Grid>
        <Grid sx={{ marginTop: "1.7rem" }}>
          <Typography sx={{ color: "#7C83AA", fontSize: "16px" }}>
            {userDetailState?.title}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={5}
        lg={5}
        className={styles.profileWithPicture}
      >
        <div style={{ width: 150 }}>
          <CircularProgressbarWithChildren
            value={userDetailState.metaCVComletionRate}
          >
            <img
              style={{ width: 120, borderRadius: "50%" }}
              src={Profile}
              alt="doge"
            />
          </CircularProgressbarWithChildren>
        </div>
      </Grid>
    </Grid>
  );
};

export default HeaderCenter;
