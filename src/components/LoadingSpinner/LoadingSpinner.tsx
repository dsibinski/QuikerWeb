import { Spinner } from "react-bootstrap";

export function LoadingSpinner({ center }: { center?: boolean }) {
  return (
    <div
      className={
        center === true
          ? "container-fluid d-flex h-100 align-items-center justify-content-center"
          : ""
      }
    >
      <Spinner animation="border" role="output" variant="success">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
