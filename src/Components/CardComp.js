import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function CardComp({ user, deleteButton }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ cursor: "pointer" }}
        component="img"
        alt="green iguana"
        height="140"
        image={user.avatar}
        onClick={() => navigate(`/profile/${user.id}`)}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(`/profile/${user.id}`)}
        >
          {user.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.Bio}
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        {deleteButton}
        <Button onClick={() => navigate(`/profile/${user.id}`)} size="small">
          More
        </Button>
      </CardActions>
    </Card>
  );
}
