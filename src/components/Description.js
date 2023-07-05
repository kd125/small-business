import React from "react";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";
import listingsData from "../Listings.json";

const Listing = (props) => {
  const id = useParams().id;
  const list = listingsData.find((c) => c.id === Number(id));

  return (
    <Container maxWidth="sm" className="listing-container">
      <Paper className="listing-paper">
        <h2>{list.Business_Name}</h2>
        {Object.keys(list).map((key, idx) => {
          return <Chip key={idx} label={`${key}: ${list[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Listing;
