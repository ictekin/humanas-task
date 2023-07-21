//React
import { useState } from "react";

//Material UI
import { Grid, Button, Dialog } from "@mui/material";

//SVG
import { ReactComponent as Logo } from "../../../assets/logo.svg";

//Icons
import SendIcon from "@mui/icons-material/Send";

//Styles
import styles from "./HeaderTop.module.css";

//Component
import DialogContent from "../../PopUpDialog/DialogContent";

const HeaderTop = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid className={styles.container}>
      <Grid item sx={{ marginLeft: "4rem" }}>
        <Logo />
      </Grid>

      <Grid item sx={{ marginRight: "4rem" }}>
        <Button
          onClick={handleClickOpen}
          className={styles.button}
          sx={{
            ":hover": {
              border: 0,
              color: "#fff",
            },
            border: 0,
            color: "#fff",
          }}
          variant="outlined"
          startIcon={<SendIcon />}
        >
          Hello!
        </Button>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          //   TransitionComponent={Transition}
        >
          <DialogContent handleClose={handleClose} />
        </Dialog>
      </Grid>
    </Grid>
  );
};

export default HeaderTop;
