import { useNavigate } from "react-router-dom";
import "./ForbidenAccess.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export const ForbiddenAccess = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
    console.log("Sesión cerrada");
  };
  return (
    <div className="forbiddenMainContainer">
      <div className="lock"></div>
      <div className="message">
        <h1>Acceso restringido</h1>
        <p>Contacta al adminstrador ante cualquier inquietud.</p>
      </div>
      <button className="btn btn-primary" type="submit" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};
