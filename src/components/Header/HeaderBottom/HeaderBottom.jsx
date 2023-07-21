//React
import { useState } from "react";

//Redux
import { useDispatch } from "react-redux";

//Material-UI
import {
  Grid,
  Tab,
  Tabs,
  Divider,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
  Typography,
  DialogActions,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

//Styles
import styles from "./HeaderBottom.module.css";

//Icons
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

//Slices
import { logout } from "../../../redux/slices/authSlice";

const CustomDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function CustomDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const HeaderBottom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Grid container className={styles.container}>
      <Grid item sx={{ marginBottom: "7rem" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#D97D54",
            },
          }}
        >
          <Tab
            sx={{ color: "#fff" }}
            onClick={() => navigate("/dashboard/main")}
            label="My Meta CV"
          />
          <Tab
            sx={{ color: "#fff" }}
            onClick={() => navigate("/dashboard/search")}
            label="Search"
          />
          <Tab
            sx={{ color: "#fff" }}
            onClick={handleClickOpen}
            label="Logout"
          />
        </Tabs>

        <CustomDialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <CustomDialogTitle id="customized-dialog-title" onClose={handleClose}>
            Logout
          </CustomDialogTitle>
          <DialogContent>
            <Typography sx={{ margin: "1rem" }}>
              You are logging out of the website. Please confirm.
            </Typography>
            <Button
              onClick={handleLogout}
              fullWidth
              variant="contained"
              sx={{
                width: "350px",
                height: "45px",
                margin: "1rem",
                backgroundColor: "#D50001",
                border: "1px solid #CC0200;",
                "&:hover": {
                  color: "#000",
                  backgroundColor: "#fff",
                },
              }}
            >
              Logout
            </Button>
          </DialogContent>
        </CustomDialog>
        <Divider sx={{ width: "90vw", background: "#fff", opacity: "0.2" }} />
      </Grid>
    </Grid>
  );
};

export default HeaderBottom;
