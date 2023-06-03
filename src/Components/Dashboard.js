import React, { useState, useEffect } from "react";
import CardComp from "./CardComp";
import "../App.js";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { API_URL } from "../Global";

function Dashboard() {
  const [urs, seturs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`${API_URL}`);
      if (!response.ok) {
        throw new Error("Request Failed");
      }
      const jsonData = await response.json();
      seturs(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", paddingTop: 30 }}>
        <CircularProgress />
      </Box>
    );
  }

  const deleteUsers = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Delete request failed");
      }
      fetchData();
    } catch (error) {
      console.error("Error while deleting:", error);
    }
  };

  return (
    <div className="TotalCardDiv">
      {urs.map((urs) => (
        <CardComp
          user={urs}
          deleteButton={
            <Button onClick={() => deleteUsers(urs.id)} size="small">
              <DeleteIcon />
            </Button>
          }
        />
      ))}
    </div>
  );
}

export default Dashboard;
