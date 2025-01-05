// IconPage.js

import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import IconCard from "./Iconcard";  // Ensure you have IconCard component for displaying each icon

const IconPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);  // Track loading state

  useEffect(() => {
    // Fetch data from the Django backend API
    axios
      .get("http://127.0.0.1:8000/api/icons/")  // Django API endpoint
      .then((response) => {
        setData(response.data);
        setLoading(false);  // Data fetched, stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading state
  }

  return (
    <Grid container spacing={3} style={{ padding: "20px" }}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <IconCard item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default IconPage;
