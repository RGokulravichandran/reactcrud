import React, { useState, useEffect } from "react";
import CardComp from "../CardComp";
import "../App.js";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Dashboard() {
  const [urs, seturs] = useState([]);
  useEffect(() => {
    fetch("https://63f71c25e40e087c958797ea.mockapi.io/user/")
      .then((data) => data.json())
      .then((ursdata) => seturs(ursdata));
  }, []);

  const deleteUsers = (id) => {
    fetch(`https://63f71c25e40e087c958797ea.mockapi.io/user/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <div className="TotalCardDiv">
      {urs ? (
        urs.map((urs) => (
          <CardComp
            user={urs}
            deleteButton={
              <Button onClick={() => deleteUsers(urs.id)} size="small">
                <DeleteIcon />
              </Button>
            }
          />
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

function CircularIndeterminate() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}

export default Dashboard;
