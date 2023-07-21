//React
import { useState } from "react";

//Material-UI
import {
  Box,
  Grid,
  Typography,
  Divider,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";

//Styles
import styles from "./Footer.module.css";

//Assets
import { ReactComponent as Logo } from "../assets/logo.svg";

//Icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Footer = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);

  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  const validateEmail = (email) => {
    setIsValidEmail(regex.test(email));
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#09134D",
        marginTop: "2rem",
      }}
    >
      <Grid container sx={{ padding: "5rem" }} className={styles.container}>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <Logo />
          <Typography
            sx={{
              fontSize: "2rem",
              letterSpacing: "0",
              fontWeight: "bold",
              color: "#fff",
              fontFamily: "Roboto Condensed",
            }}
          >
            Discover Your Potential!
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "0.3rem",
              marginTop: "5rem",
            }}
          >
            <FacebookIcon sx={{ color: "white" }} />
            <TwitterIcon sx={{ color: "white" }} />
            <InstagramIcon sx={{ color: "white" }} />
            <YouTubeIcon sx={{ color: "white" }} />
            <LinkedInIcon sx={{ color: "white" }} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            CONTENT
          </Typography>
          <Typography sx={{ color: "white" }}>HomePage</Typography>
          <Typography sx={{ color: "white" }}>About Us</Typography>
          <Typography sx={{ color: "white" }}>Team</Typography>
          <Typography sx={{ color: "white" }}>About Project</Typography>
          <Typography sx={{ color: "white" }}>Blog</Typography>
          <Typography sx={{ color: "white" }}>Contact</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            PROJECT FOR
          </Typography>
          <Typography sx={{ color: "white" }}>Everyone</Typography>
          <Typography sx={{ color: "white" }}>Business</Typography>
          <Typography sx={{ color: "white" }}>Personal</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={3}
          lg={3}
          xl={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <Typography sx={{ color: "white", fontWeight: "bold" }}>
            CONTACT INFORMATIONS
          </Typography>
          <Typography sx={{ color: "white", wordBreak: "break-word" }}>
            Kültür District Cumhuriyet Apartment No:12 Kat:4 Floor:401 35410
            Konak / IZMIR / TURKEY
          </Typography>
          <Typography sx={{ color: "white" }}>+90 232 332 0462</Typography>
          <Typography sx={{ color: "white" }}>+90 444 0 568</Typography>
          <Typography sx={{ color: "white" }}>
            hello@humananalytics.com
          </Typography>
        </Grid>

        <Divider
          sx={{
            width: "100%",
            background: "#fff",
            opacity: "0.2",
            marginTop: "2rem",
          }}
        />
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <Grid xs={12} sm={12} md={5} lg={5} xl={5}>
            <Typography sx={{ color: "white" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Grid>

          <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
            <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
              <OutlinedInput
                error={!isValidEmail}
                onChange={(e) => {
                  validateEmail(e.target.value);
                }}
                helperText="There has been an error"
                placeholder="Sign up for the e-newsletter"
                sx={{ border: 0, backgroundColor: "#fff" }}
                id="outlined-adornment-weight"
                margin="dense"
                endAdornment={
                  <InputAdornment position="end">
                    <Box
                      sx={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: "#09134D",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "-10px",
                      }}
                    >
                      <ArrowForwardIcon sx={{ color: "#fff" }} />
                    </Box>
                  </InputAdornment>
                }
                aria-describedby="outlined-weight-helper-text"
                inputProps={{
                  "aria-label": "weight",
                }}
              />
            </FormControl>
          </Grid>
          <Divider
            sx={{
              width: "100%",
              background: "#fff",
              opacity: "0.2",
              marginTop: "2rem",
            }}
          />
        </Grid>
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          <Grid xs={12} sm={12} md={3} lg={3} xl={3}>
            <Typography sx={{ color: "#fff" }}>
              Android and iOS apps Click
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={5} lg={5} xl={5}>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "2rem",
              }}
            >
              <Typography sx={{ color: "#fff" }}>
                Protection of Personal Data
              </Typography>
              <Typography sx={{ color: "#fff" }}>Privacy Policy</Typography>
              <Typography sx={{ color: "#fff" }}>Cookie Policy</Typography>
            </Grid>
            <Typography align="right" sx={{ color: "#fff", marginTop: "1rem" }}>
              Copyright 2022 Human Analytics
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
