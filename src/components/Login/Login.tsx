import "./login.css";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { auth, signInWithCredential } from "../../firebase";
import { GoogleAuthProvider } from "firebase/auth";


export const Login = () => {
  const navigate = useNavigate();

  const handleGoogleLogin = async (response: any) => {
    try {
      // Obtener el ID Token de Google OAuth
      const idToken = response.credential;

      // Crear credenciales para Firebase con el ID Token
      const credential = GoogleAuthProvider.credential(idToken);

      // Iniciar sesión en Firebase con las credenciales de Google
      const userCredential = await signInWithCredential(auth, credential);

      console.log("Usuario autenticado en Firebase:", userCredential.user);

      navigate("/");
    } catch (error) {
      console.error("Error en la autenticación con Firebase:", error);
    }
  };
  return (
    <div className="d-flex align-items-center py-4 vh-100">
      <main className="form-signin w-100 m-auto">
        <form className="d-flex flex-column justify-content-center">
          <div className="d-flex justify-content-center">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 61.7998 61.7998"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-name="Layer 2" id="Layer_2">
                <g data-name="—ÎÓÈ 1" id="_ÎÓÈ_1">
                  <circle
                    cx="30.8999"
                    cy="30.8999"
                    fill="#58b0e0"
                    r="30.8999"
                  />
                  <path
                    d="M23.255 38.68l15.907.121v12.918l-15.907-.121V38.68z"
                    fill="#f9dca4"
                    fillRule="evenodd"
                  />
                  <path
                    d="M43.971 58.905a30.967 30.967 0 0 1-25.843.14V48.417H43.97z"
                    fill="#e6e6e6"
                    fillRule="evenodd"
                  />
                  <path
                    d="M33.403 61.7q-1.238.099-2.503.1-.955 0-1.895-.057l1.03-8.988h2.41z"
                    fill="#e9573e"
                    fillRule="evenodd"
                  />
                  <path
                    d="M25.657 61.332A34.072 34.072 0 0 1 15.9 57.92a31.033 31.033 0 0 1-7.857-6.225l1.284-3.1 13.925-6.212c0 5.212 1.711 13.482 2.405 18.95z"
                    fill="#677079"
                    fillRule="evenodd"
                  />
                  <path
                    d="M39.165 38.759v3.231c-4.732 5.527-13.773 4.745-15.8-3.412z"
                    fillRule="evenodd"
                    opacity="0.11"
                  />
                  <path
                    d="M31.129 8.432c21.281 0 12.987 35.266 0 35.266-12.267 0-21.281-35.266 0-35.266z"
                    fill="#ffe8be"
                    fillRule="evenodd"
                  />
                  <path
                    d="M18.365 24.046c-3.07 1.339-.46 7.686 1.472 7.658a31.972 31.972 0 0 1-1.472-7.659z"
                    fill="#f9dca4"
                    fillRule="evenodd"
                  />
                  <path
                    d="M44.14 24.045c3.07 1.339.46 7.687-1.471 7.658a31.993 31.993 0 0 0 1.471-7.658z"
                    fill="#f9dca4"
                    fillRule="evenodd"
                  />
                  <path
                    d="M21.931 14.328c-3.334 3.458-2.161 13.03-2.161 13.03l-1.05-.495c-6.554-25.394 31.634-25.395 25.043 0l-1.05.495s1.174-9.572-2.16-13.03c-4.119 3.995-14.526 3.974-18.622 0z"
                    fill="#464449"
                    fillRule="evenodd"
                  />
                  <path
                    d="M36.767 61.243a30.863 30.863 0 0 0 17.408-10.018l-1.09-2.631-13.924-6.212c0 5.212-1.7 13.393-2.394 18.861z"
                    fill="#677079"
                    fillRule="evenodd"
                  />
                  <path
                    d="M39.162 41.98l-7.926 6.465 6.573 5.913s1.752-9.704 1.353-12.378z"
                    fill="#ffffff"
                    fillRule="evenodd"
                  />

                  <path
                    d="M23.253 41.98l7.989 6.465-6.645 5.913s-1.746-9.704-1.344-12.378z"
                    fill="#ffffff"
                    fillRule="evenodd"
                  />
                  <path
                    d="M28.109 51.227l3.137-2.818 3.137 2.818-3.137 2.817-3.137-2.817z"
                    fill="#e9573e"
                    fillRule="evenodd"
                  />
                  <path
                    d="M25.767 61.373a30.815 30.815 0 0 1-3.779-.88 2.652 2.652 0 0 1-.114-.093l-3.535-6.39 4.541-3.26h-4.752l1.017-6.851 4.11-2.599c.178 7.37 1.759 15.656 2.512 20.073z"
                    fill="#434955"
                    fillRule="evenodd"
                  />
                  <path
                    d="M36.645 61.266c.588-.098 1.17-.234 1.747-.384.682-.177 1.36-.377 2.034-.579l.134-.043 3.511-6.315-4.541-3.242h4.752l-1.017-6.817-4.11-2.586c-.178 7.332-1.758 15.571-2.51 19.966z"
                    fill="#434955"
                    fillRule="evenodd"
                  />
                </g>
              </g>
            </svg>
          </div>

          <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>
          <div className="googleButton">
            <GoogleLogin
              width={"300px"}
              onSuccess={handleGoogleLogin}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            />
          </div>
        </form>
      </main>
    </div>
  );
};
