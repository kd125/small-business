import { connect } from "react-redux";
import Listings from "../components/Listings";
import { removeListing } from "../redux/actions";

const mapStateToProps = (state) => ({
  listings: state.listings,
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  removeListing: (idx) => dispatch(removeListing(idx)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
