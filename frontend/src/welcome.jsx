import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <MDBNavbar light bgColor="light" className="shadow-sm">
        <MDBContainer>
          {/* Logo */}
          <MDBNavbarBrand href="#" className="fw-bold">
            MyApp
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      {/* Hero Section */}
      <MDBContainer className="text-center mt-5">
        <h1 className="display-4 fw-bold">Welcome to MyApp</h1>
        <p className="lead text-muted">
          Create an account or login to continue.
        </p>

        <div className="mt-4">
          <Link to="/signup" className="btn btn-primary me-3">
            Sign Up
          </Link>

          <Link to="/login" className="btn btn-outline-primary">
            Login
          </Link>
        </div>
      </MDBContainer>
    </>
  );
};

export default Welcome;
