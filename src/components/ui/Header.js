import React, { useEffect, useState } from "react";
import "./header.css";
import {
  AppBar,
  Toolbar,
  useScrollTrigger,
  Button,
  Tabs,
  Tab,
  Menu,
  MenuItem,
  SwipeableDrawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "@emotion/styled";

import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const ToolbarMargin = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
  marginBottom: "3rem",
  [theme.breakpoints.down("md")]: { marginBottom: "1.5rem" },
  [theme.breakpoints.down("sm")]: { marginBottom: "0.68rem" },
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header() {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenue, setOpenMenue] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleTabChange = (e, updateValue) => {
    setValue(updateValue);
  };
  const handleMouseOver = (e) => {
    setAnchorEl(e.currentTarget);
    setOpenMenue(true);
  };
  const handleMouseOut = () => {
    setAnchorEl(null);
    setOpenMenue(false);
  };
  const handleMenueItemClick = (e, i) => {
    setValue(1);
    handleMouseOut();
    setSelectedIndex(i);
  };

  const routes = [
    { name: "Home", link: "/", activeIndex: 0 },
    {
      name: "Services",
      link: "/services",
      activeIndex: 1,
      ariaOwns: anchorEl ? "services-menue" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (event) => handleMouseOver(event),
    },
    { name: "The Revolution", link: "/revolution", activeIndex: 2 },
    { name: "About Us", link: "/about", activeIndex: 3 },
    { name: "Contact Us", link: "/contact", activeIndex: 4 },
  ];
  const menuOptions = [
    { name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0 },
    {
      name: "Custom Software Development",
      link: "/customsoftware",
      activeIndex: 1,
      selectedIndex: 1,
    },
    {
      name: "iOS/Android App Development",
      link: "/mobileapps",
      activeIndex: 1,
      selectedIndex: 2,
    },
    {
      name: "Website Development",
      link: "/websites",
      activeIndex: 1,
      selectedIndex: 3,
    },
  ];
  useEffect(() => {
    const pathName = window.location.pathname;
    const pathObject = [...routes, ...menuOptions].find(
      (route) => route.link === pathName
    );
    if (pathObject && pathObject?.activeIndex !== value) {
      setValue(pathObject.activeIndex);
    }
  }, [value]);

  const tabs = (
    <>
      <Tabs
        value={value}
        onChange={handleTabChange}
        textColor="inherit"
        //   indicatorColor="secondary"
        sx={{ marginLeft: "auto" }}
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route.name}-${index}`}
            label={route.name}
            component={Link}
            to={route.link}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
            sx={(theme) => ({
              ...theme.typography.tab,
              minWidth: 10,
              marginLeft: "25px",
            })}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        sx={(theme) => ({
          ...theme.typography.estimate,
          borderRadius: "50px",
          marginLeft: "50px",
          marginRight: "25px",
          height: "45px",
        })}
      >
        Free Estimation
      </Button>
      <Menu
        id="services-menue"
        anchorEl={anchorEl}
        open={openMenue}
        onClose={handleMouseOut}
        MenuListProps={{ onMouseLeave: handleMouseOut }}
        sx={(theme) => ({
          ".MuiMenu-paper": {
            ...theme.typography.customClasses.menu,
          },
        })}
        elevation={0}
        value={selectedIndex}
      >
        {menuOptions.map((option, idx) => (
          <MenuItem
            key={`${option.name}-${idx}`}
            onClick={(e) => handleMenueItemClick(e, option.selectedIndex)}
            selected={option.selectedIndex === selectedIndex}
            component={Link}
            to={option.link}
            sx={(theme) => ({
              ...theme.typography.customClasses.menuItem,
            })}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        sx={(theme) => ({
          ".MuiPaper-root": {
            ...theme.typography.customClasses.menu,
          },
        })}
      >
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              divider
              button
              key={route.name}
              component={Link}
              to={route.link}
              onClick={() => setOpenDrawer(false)}
            >
              <ListItemText
                disableTypography
                sx={(theme) => ({ ...theme.typography.customClasses.menuItem })}
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            divider
            button
            key="Free-Estimation"
            component={Link}
            to="/estimation"
            onClick={() => setOpenDrawer(false)}
            sx={(theme) => ({ backgroundColor: theme.palette.common.orange })}
          >
            <ListItemText
              disableTypography
              sx={(theme) => ({ ...theme.typography.customClasses.menuItem })}
            >
              Free-Estimation
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        onClick={() => setOpenDrawer((prev) => !prev)}
        disableRipple
        sx={{ marginLeft: "auto" }}
      >
        <MenuIcon sx={{ height: "50px", width: "50px" }} />
      </IconButton>
    </>
  );
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              onClick={() => setValue(0)}
              sx={{ padding: 0 }}
              disableRipple
            >
              <img alt="company logo" src={logo} className="logo-size" />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <ToolbarMargin />
    </>
  );
}

export default Header;
