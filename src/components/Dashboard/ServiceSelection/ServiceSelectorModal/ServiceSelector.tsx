import React from "react";

export const ServiceSelectorModal = () => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      >
        Cargar servicio
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New message
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nombre servicio
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                </ul>
              </div>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-danger dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Profesional
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Mel
                    </a>
                    <a className="dropdown-item" href="#">
                      Mili
                    </a>
                    <a className="dropdown-item" href="#">
                      Sofi
                    </a>
                  </li>
                </ul>
              </div>
              <form>
                <div className="mb-3">
                  <label for="recipient-name" className="col-form-label">
                    Precio:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <label for="message-text" className="col-form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Send message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
