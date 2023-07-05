import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardActions, Divider } from "@mui/material";
import listingsData from "../Listings.json";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeListing } from "../redux/actions";
import DeleteIcon from "@mui/icons-material/Delete";

const Listings = () => {
  const dispatch = useDispatch();

  const listingsData = useSelector((state) => state.listings);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const handleRemoveListing = (idx) => {
    dispatch(removeListing(idx));
  };

  return (
    <div className="card-container">
      {listingsData.map((listing, idx) => (
        <Card key={idx} className="card">
          <CardContent className="text-gray">
            <span>{listing.Business_Name}</span>
            <ul>
              <li>Address: {listing.Address}</li>
              <li>Operating Hours: {listing.Operating_Hours}</li>
              <li>Description: {listing.Description}</li>
            </ul>
          </CardContent>
          <CardActions style={{ color: "mediumblue" }}>
            <Link to={`/Description/${String(listing.id).toLowerCase()}`}>
              See More Details
            </Link>
          </CardActions>
          {isLoggedIn && (
            <DeleteIcon
              className="icon text-red"
              onClick={() => handleRemoveListing(idx)}
            />
          )}
          <Divider />
        </Card>
      ))}
    </div>
  );
};

export default Listings;
