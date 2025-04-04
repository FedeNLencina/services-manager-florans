import "./notLoggedUser.css";
import { useNavigate } from "react-router-dom";
import loginRedirect from "../../../assets/loginRedirect.svg";

export const NotLoggedUser = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex align-items-center py-4 vh-100">
      <main className="form-signin w-100 m-auto ">
        <form className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center">
            <img className="notLoggedImg" src={loginRedirect}></img>
          </div>

          <h1 className="h3 mb-3 fw-normal text-center">
            Para acceder al dashboard inicia sesion
          </h1>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => navigate("/login")}
          >
            Go to log in
          </button>
        </form>
      </main>
    </div>
  );
};
