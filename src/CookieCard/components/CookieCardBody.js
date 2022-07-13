import Card from "react-bootstrap/Card";

const cookieContent = {
  title: "Our website uses cookies",
  text: "Our website use cookies. By continuing, we assume your permission to deploy cookies as detailed in our",
  action: "Privacy Policy"
};

export const CookieCardBody = () => {
  return (
    <Card.Body style={{ textAlign: "center" }}>
      <img src="/cookie.png" alt="cookie" height="70px" />
      <h6 style={{ fontWeight: 600, marginTop: "2rem" }}>
        {cookieContent.title}
      </h6>
      <p style={{ fontSize: "12px", color: "gray" }}>
        {cookieContent.text} <a href="/">{cookieContent.action}</a>
      </p>
    </Card.Body>
  );
};
