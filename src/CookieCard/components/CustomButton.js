import Button from "react-bootstrap/Button";

const purple = "#4A3AFF";
export const CustomButton = ({ title, isPrimary, onClick }) => {
  const defaultAction = () => console.log("TBD");
  return (
    <Button
      onClick={onClick || defaultAction}
      style={{
        margin: "5px",
        backgroundColor: isPrimary ? purple : "white",
        height: "40px",
        border: "none",
        fontSize: "12px",
        padding: "5px 15px",
        borderRadius: "20px",
        color: isPrimary ? "white" : "black"
      }}
    >
      {title}
    </Button>
  );
};
