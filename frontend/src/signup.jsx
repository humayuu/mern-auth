import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await axios.post(
        "http://localhost:8080/api/signup",
        formData,
      );
      console.log(response.data);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
      navigate("dashboard");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.response?.data?.message || err.message);
    }
  };

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

          <form onSubmit={handleSubmit}>
            <MDBInput
              label="Enter Name"
              type="text"
              id="name"
              name="name"
              className="mb-4"
              value={formData.name}
              onChange={handleChange}
              autoFocus
            />

            <MDBInput
              label="Email Address"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mb-4"
            />

            <MDBInput
              label="Password"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mb-4"
            />

            <MDBInput
              label="Confirm Password"
              type="password"
              id="password_confirmation"
              name="password_confirmation"
              value={formData.password_confirmation}
              onChange={handleChange}
              className="mb-4"
            />
            <MDBBtn
              className="w-100 mb-3"
              color="primary"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "loading...." : "Create Account"}
            </MDBBtn>

            {status === "success" && <p>Message sent.</p>}
            {status === "error" && <p>{errorMsg}</p>}

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
