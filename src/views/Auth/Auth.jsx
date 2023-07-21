//React
import { useEffect, useState } from "react";

//Material-UI
import { Container, Typography, Box, Button, TextField } from "@mui/material";

//Styles
import styles from "./Auth.module.css";

//Icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//Redux
import { useDispatch } from "react-redux";

//Slices
import { login } from "../../redux/slices/authSlice";

//Helpers
import { emailValidation, passwordValidation } from "../../helpers/validations";

const Auth = () => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsValidEmail(emailValidation(email));
    setIsValidPassword(passwordValidation(password));
  }, [email, password]);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "450px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box className={styles.container}>
        <Typography variant="title1">Employee Login</Typography>
        <Typography variant="description" sx={{ marginTop: "1rem" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took
        </Typography>
        <Button
          maxwidth={"true"}
          variant="contained"
          sx={{
            marginTop: "1rem",
            backgroundColor: "#137BB8",
            border: " 1px solid #095B8C;",
            display: "flex",
            justifyContent: "flex-start",
            padding: "0",
            textTransform: "none",
            fontWeight: 400,
          }}
          onClick={() => {
            dispatch(
              login({
                url: "https://nervous-sun-hat-cod.cyclic.app/login",
                body: { email: "ictekin@google.com", password: "deneme" },
              })
            );
          }}
          startIcon={
            <LinkedInIcon
              sx={{
                width: "35px",
                marginLeft: "4px",
                height: "30px",
                borderRight: " 1px solid #095B8C;",
              }}
            />
          }
        >
          <Typography
            variant="buttonNormal"
            sx={{ width: "100%", textAlign: "center", marginRight: "15px" }}
          >
            Sign in with LinkedIn
          </Typography>
        </Button>

        <Typography variant="title1" sx={{ marginTop: "3rem" }}>
          Company Login
        </Typography>

        <Typography variant="description" sx={{ marginTop: "1rem" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took
        </Typography>

        <TextField
          error={isValidEmail}
          size={"small"}
          label={"Email or Phone"}
          id="standard-basic"
          variant="standard"
          sx={{ marginTop: "1rem" }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <TextField
          error={isValidPassword}
          type="password"
          size={"small"}
          label={"Password"}
          id="standard-basic"
          variant="standard"
          sx={{ marginTop: "1rem" }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button
          maxwidth={"true"}
          variant="contained"
          sx={{
            marginTop: "1rem",
            backgroundColor: "#0B1656",
            border: " 1px solid #000000;",
          }}
          onClick={() => {
            dispatch(
              login({
                url: "https://nervous-sun-hat-cod.cyclic.app/login",
                body: { email: email, password: password },
              })
            );
          }}
        >
          <Typography
            variant="buttonBold"
            sx={{ width: "100%", textAlign: "center" }}
          >
            Login
          </Typography>
        </Button>
      </Box>
    </Container>
  );
};

export default Auth;
