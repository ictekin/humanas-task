//Material-UI
import { Grid, Divider } from "@mui/material";

//Components
import HeaderTop from "./Header/HeaderTop/HeaderTop";
import HeaderCenter from "./Header/HeaderCenter/HeaderCenter";
import HeaderBottom from "./Header/HeaderBottom/HeaderBottom";

const Header = () => {
  return (
    <Grid
      sx={{
        width: "100%",
        backgroundColor: "#0B1556",
      }}
    >
      <HeaderTop />

      <Divider sx={{ background: "#fff", opacity: "0.2" }} />

      <HeaderCenter />

      <HeaderBottom />
    </Grid>
  );
};

export default Header;

/*
 */
