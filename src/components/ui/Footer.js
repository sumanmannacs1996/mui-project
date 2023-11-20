import React from "react";
import "./footer.css";
import footerAdornment from "../../assets/Footer Adornment.svg";
import { Grid, Hidden } from "@mui/material";
import { Link } from "react-router-dom";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";

const linkStyle = {
  color: "white",
  fontFamily: "Arial",
  fontSize: "0.75rem",
  fontWeight: "bold",
  textDecoration: "none",
};

function Footer() {
  return (
    <footer className="footer">
      <Hidden mdDown>
        <Grid container justifyContent="center" sx={{ position: "absolute" }}>
          <Grid item sx={{ m: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <Grid item sx={linkStyle} component={Link} to="/">
                Home
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ m: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <Grid item sx={linkStyle} component={Link} to="/services">
                Services
              </Grid>
              <Grid item sx={linkStyle} component={Link} to="/customsoftware">
                Custom Software Development
              </Grid>
              <Grid item sx={linkStyle} component={Link} to="/mobileapps">
                Mobile App Development
              </Grid>
              <Grid item sx={linkStyle} component={Link} to="/websites">
                Website Developement
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ m: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <Grid item sx={linkStyle} component={Link} to="/revolution">
                The Revolution
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ m: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <Grid item sx={linkStyle} component={Link} to="/about">
                About Us
              </Grid>
              <Grid item sx={linkStyle} component={Link} to="/history">
                History
              </Grid>
              <Grid item sx={linkStyle} component={Link} to="/team">
                Team
              </Grid>
            </Grid>
          </Grid>
          <Grid item sx={{ m: "3em" }}>
            <Grid container direction="column" spacing={2}>
              <Grid item sx={linkStyle} component={Link} to="/contact">
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      <img
        alt="black decorative slash"
        src={footerAdornment}
        className="footer-adornmrnt"
      />
      <Grid
        container
        justifyContent="flex-end"
        spacing={2}
        sx={{ position: "absolute", right: "1.5em", marginTop: "-6em" }}
      >
        <Grid item component={"a"} href="http://facebook.com" target="_blank">
          <img alt="facebook" src={facebookIcon} className="icon-style" />
        </Grid>
        <Grid item component={"a"} href="http://twiter.com" target="_blank">
          <img alt="twiter" src={twitterIcon} className="icon-style" />
        </Grid>
        <Grid item component={"a"} href="http://instagram.com" target="_blank">
          <img alt="instagram" src={instagramIcon} className="icon-style" />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;
