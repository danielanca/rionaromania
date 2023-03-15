import { useNavigate } from "react-router-dom";

export function PageNotFound() {
  const navigate = useNavigate();
  return (
    <div className="d-flex text-center flex-column align-items-center rounded-5 justify-content-center col-12 col-md-6 m-auto my-5 border p-4">
      <h1 className="mb-4">This page does not exist</h1>
      <button className="secondary-btn" onClick={() => navigate("/")}>
        Home
      </button>
    </div>
  );
}
