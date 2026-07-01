import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <div
        className="card shadow-lg border-0"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <div className="card-body p-5">
          <h2 className="text-center mb-4 fw-bold">Create Account</h2>
          <p className="text-center text-muted mb-4">Sign up to get started</p>

          <form>
            <MDBInput
              label="Enter Name"
              type="text"
              className="mb-4"
              autoFocus
            />

            <MDBInput label="Email Address" type="email" className="mb-4" />

            <MDBInput label="Password" type="password" className="mb-4" />

            <MDBInput
              label="Confirm Password"
              type="password"
              className="mb-4"
            />
            <MDBBtn className="w-100 mb-3" color="primary">
              Create Account
            </MDBBtn>

            <div className="text-center">
              <p className="mb-0">
                Already have an account?{" "}
                <Link to="/login" className="fw-bold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
