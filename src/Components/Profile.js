import { useNavigate, useParams } from "react-router-dom";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Button from "@mui/material/Button";

function Profile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentUser, setcurrentUser] = useState({});
  fetch(`https://63f71c25e40e087c958797ea.mockapi.io/user/${id}`).then((data) =>
    data.json().then((currentUsr) => setcurrentUser(currentUsr))
  );

  return (
    <div className="profileCard">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            width="500"
            image={currentUser.avatar}
            alt="green iguana"
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
