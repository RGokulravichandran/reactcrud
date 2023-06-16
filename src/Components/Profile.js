import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";
import { API_URL } from "../Global";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentUser, setcurrentUser] = useState(null);
  fetch(`${API_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => setcurrentUser(data));
  if (currentUser == null) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 30 }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <div className="profileCard">
      <Card sx={{ maxWidth: 545 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            width="500"
            image={currentUser.avatar}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {currentUser.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: {currentUser.email}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: {currentUser.phone}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Address: {currentUser.address}
            </Typography>
            <Button
              variant="contained"
              onClick={() => navigate(`/edit-profile/${id}`)}
            >
              edit
            </Button>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Profile;
