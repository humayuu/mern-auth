import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const UserLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_name");
    navigate("/login", { replace: true });
  };

  const name = localStorage.getItem("user_name");

  return (
    <>
      <MDBNavbar light bgColor="light" className="shadow-sm">
        <MDBContainer>
          <MDBNavbarBrand className="fw-bold">MyApp</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>

      <MDBContainer className="text-center mt-5">
        <h1 className="display-4 fw-bold">Welcome to MyApp</h1>
        <h1 className="display-4 fw-bold">
          User: <span className="text-primary">{name}</span>
        </h1>

        <div className="mt-4">
          <button onClick={UserLogout} className="btn btn-dark">
            Logout
          </button>
        </div>
      </MDBContainer>
    </>
  );
};

export default Welcome;
