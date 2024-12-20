import { Spinner } from "react-bootstrap";

export function LoadingSpinner({ center }: { center?: boolean }) {
  const someNiceThing = 5;

  const loadingText = "Loading...";

  return (
    <div
      className={
        center === true
          ? "container-fluid d-flex h-100 align-items-center justify-content-center"
          : ""
      }
    >
      <Spinner animation="border" role="output" variant="success">
        <span className="visually-hidden">loadingText</span>
      </Spinner>
    </div>
  );
}
