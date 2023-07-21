import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Condensed", "-apple-system"].join(","),
    title1: {
      fontSize: "24px",
      fontWeight: "bold",
    },
    description: {
      color: "#404040",
      fontSize: "12px",
      fontWeight: 400,
    },
    buttonBold: {
      color: "#fff",
      fontSize: "12px",
      fontWeight: "bold",
    },
    buttonNormal: {
      color: "#fff",
      fontSize: "12px",
      fontWeight: 400,
    },
  },
});
