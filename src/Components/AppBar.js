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
