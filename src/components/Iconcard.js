// IconCard.js

import React from "react";
import { Card, CardContent, Typography, CardMedia, Paper } from "@mui/material";

const IconCard = ({ item }) => {
  return (
    <Paper elevation={3} style={{ borderRadius: "10px", padding: "10px" }}>
      <Card>
        <CardMedia
          component="img"
          alt={item.name}
          height="200"
          image={item.image}
          style={{ borderRadius: "10px", objectFit: "cover" }}
        />
        <CardContent>
          <Typography variant="h6" align="center" style={{ fontWeight: "bold" }}>
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {item.description}
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default IconCard;
