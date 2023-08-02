import React from "react";
import { roomList } from "../data/data2";
import Layout from "../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  // Table,
  Typography,
} from "@mui/material";

const room = () => {
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {roomList.map((room) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={room.image}
                alt={room.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {room.name}
                </Typography>
                <Typography variant="body2">{room.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default room;
