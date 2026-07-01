import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Login = () => {
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
          <h2 className="text-center mb-4 fw-bold">Login Your Account</h2>
          <p className="text-center text-muted mb-4">Login to get started</p>

          <form>
            <MDBInput
              label="Email Address"
              type="email"
              className="mb-4"
              autoFocus
            />

            <MDBInput label="Password" type="password" className="mb-4" />

            <MDBBtn className="w-100 mb-3" color="primary">
              Login
            </MDBBtn>

            <div className="text-center">
              <p className="mb-0">
                Don`t have an account?{" "}
                <Link to="/signup" className="fw-bold">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
