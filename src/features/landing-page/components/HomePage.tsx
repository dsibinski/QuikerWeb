import { Col, Container, Row } from "react-bootstrap";

export const HomePage = () => {
  return (
    <Container
      fluid
      style={{
        backgroundColor: "#343a40",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "100%",
        padding: "0",
        margin: "0",
      }}
    >
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1 style={{ color: "white" }}>Welcome to Quiker!</h1>
        </Col>
      </Row>
    </Container>
  );
};
