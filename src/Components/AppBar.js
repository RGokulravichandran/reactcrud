import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Button from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function HideAppBar(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Button onClick={() => navigate("/")} sx={{ marginRight: "auto" }}>
              <HomeIcon sx={{ color: "white" }} fontSize="large" />
            </Button>
            <Typography variant="h6" component="div">
              Welcome To Customer Portal
            </Typography>

            <Button
              onClick={() => navigate("/create-user")}
              sx={{ marginLeft: "auto" }}
            >
              <PersonAddAltIcon sx={{ color: "white" }} fontSize="large" />
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}
