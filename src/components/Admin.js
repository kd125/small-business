import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { addListing } from "../redux/actions";

class AddListing extends Component {
  state = {
    open: false,
    Business_Name: "",
    Address: "",
    Operating_Hours: "",
    Description: "",
  };

  toggleDialog = () => this.setState({ open: !this.state.open });

  handleTextChange = (e) => {
    const newState = { ...this.state };
    newState[e.target.id] = e.target.value;
    this.setState(newState);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...this.state };
    payload.id = this.props.listings.length + 1;
    payload.Name = payload.Business_Name;
    delete payload.open;
    console.log("THE CAR", payload);
    this.props.addListing(payload);
    this.setState({ open: false });
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open !== this.state.open) {
      this.setState({
        Business_Name: "",
        Address: "",
        Operating_Hours: "",
        Description: "",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div style={{ textAlign: "center" }}>
          <h1>Add Listing:</h1>
          <Button
            variant="contained"
            className="className"
            onClick={this.toggleDialog}
          >
            Add Listing
          </Button>
        </div>
        <div>
          <Dialog open={this.state.open} onClose={this.toggleDialog}>
            <DialogTitle>Add New Listing</DialogTitle>
            <DialogContent>
              <form
                onSubmit={this.handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "350px",
                }}
              >
                <TextField
                  id="Business_Name"
                  placeholder="Business Name"
                  value={this.state.Business_Name}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="Address"
                  placeholder="Address"
                  value={this.state.Address}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="Operating_Hours"
                  placeholder="Operating Hours"
                  value={this.state.Operating_Hours}
                  onChange={this.handleTextChange}
                  required
                />
                <TextField
                  id="Description"
                  placeholder="Description"
                  value={this.state.Description}
                  onChange={this.handleTextChange}
                  required
                />
                <br />
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  listings: state.listings,
});

export default connect(mapStateToProps, { addListing })(AddListing);
