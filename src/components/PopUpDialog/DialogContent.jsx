import {
  Grid,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import styles from "./DialogContent.module.css";

import { ReactComponent as Logo } from "../../assets/logo.svg";

import CloseIcon from "@mui/icons-material/Close";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DialogContent = (props) => {
  return (
    <Grid container className={styles.container}>
      <Grid
        xs={12}
        sm={12}
        md={3}
        lg={3}
        xl={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#091450",
          height: "100vh",
          padding: "5rem",
        }}
      >
        <Logo />
        <Grid sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography sx={{ color: "#fff" }}>Wellcome.</Typography>
          <Typography sx={{ color: "#fff" }}>
            Discover Your Potential!
          </Typography>
          <Button sx={{ color: "#000", backgroundColor: "#fff" }}>
            Learn More About Humanas
          </Button>
        </Grid>
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={9}
        lg={9}
        xl={9}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Grid
          sx={{
            width: "100%",
            height: "30vh",
            position: "relative",
          }}
        >
          <IconButton
            sx={{ position: "absolute", right: 30, top: 30 }}
            onClick={props.handleClose}
          >
            <Typography variant="body2">Close Menu</Typography>
            <CloseIcon sx={{ color: "red" }} />
          </IconButton>
        </Grid>
        <Grid xs={12} sm={12} md={9} lg={9} xl={9} sx={{ marginLeft: "2rem" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HorizontalRuleIcon />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HorizontalRuleIcon />
                </ListItemIcon>
                <ListItemText primary="About Us" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HorizontalRuleIcon />
                </ListItemIcon>
                <ListItemText primary="Team" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HorizontalRuleIcon />
                </ListItemIcon>
                <ListItemText primary="About Project" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HorizontalRuleIcon />
                </ListItemIcon>
                <ListItemText primary="Blog" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HorizontalRuleIcon />
                </ListItemIcon>
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginLeft: "2.5rem",
            marginBottom: "4.5rem",
            marginRight: "4.5rem",
          }}
        >
          <Grid>
            <IconButton>
              <Typography>Join Us</Typography>
              <ArrowForwardIcon />
            </IconButton>
          </Grid>
          <Grid
            xs={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "flex-end",
                width: "100%",
                gap: "0.5rem",
              }}
            >
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <LinkedInIcon />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          sx={{ position: "absolute", right: 0, bottom: 0, padding: "2rem" }}
        >
          <Typography sx={{ display: "inline-block", paddingLeft: "1rem" }}>
            Protection of Personal Data
          </Typography>
          <Typography sx={{ display: "inline-block", paddingLeft: "1rem" }}>
            Privacy Policy
          </Typography>
          <Typography sx={{ display: "inline-block", paddingLeft: "1rem" }}>
            Cookie Policy
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DialogContent;
