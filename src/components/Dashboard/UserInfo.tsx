import React from "react";
import { Link } from "react-router";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

export const UserInfo = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex justify-content-between">
        <a className="navbar-brand" href="#">
          Hola usuario
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-end"
          id="navbarTogglerDemo02"
        >
          <button
            className="btn btn-primary"
            type="submit"
            onClick={() => {
              googleLogout();
              navigate("/login");
            }}
          >
            Log out
          </button>
        </div>
      </div>
    </nav>
  );
};
