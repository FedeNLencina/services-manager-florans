export const LoadingPage = () => {
  return (
    <div className="d-flex justify-content-center hvh-100">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Loading...</span>
      </button>
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    </div>
  );
};
