import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";

export const CookieCardLayout = ({ children }) => {
  return (
    <Card
      style={{
        borderRadius: "15px",
        width: "300px",
        height: "350px"
      }}
    >
      <Card.Header
        style={{
          backgroundColor: "transparent",
          border: "none",
          textAlign: "right"
        }}
      >
        <CloseButton style={{ fontSize: "12px" }} />
      </Card.Header>
      {children}
    </Card>
  );
};
