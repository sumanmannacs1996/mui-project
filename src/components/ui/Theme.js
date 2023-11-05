import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const arcBlue = "#0B72B9";
const arcOrange = "#FFBA60";
const arcGrey = "#868686";

export default createTheme({
  palette: {
    common: {
      blue: arcBlue,
      orange: arcOrange,
    },
    primary: {
      main: arcBlue,
    },
    secondary: {
      main: arcOrange,
    },
  },
  typography: {
    estimate: {
      fontSize: "1rem",
      fontFamily: "Pacifico",
      textTransform: "none",
      color: "white",
    },
    tab: {
      fontFamily: "Railway",
      textTransform: "none",
      fontWeight: "700",
      fontSize: "1rem",
    },
    customClasses: {
      menu: {
        backgroundColor: arcBlue,
        color: "white",
        borderRadius: "0px",
      },
      menuItem: {
        fontFamily: "Railway",
        textTransform: "none",
        fontWeight: "700",
        fontSize: "1rem",
        opacity: 0.7,
        "&:hover": {
          opacity: 1,
        },
      },
    },
  },
});
