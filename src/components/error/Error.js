import Alert from "react-bootstrap/Alert";
import { FiFrown } from "react-icons/fi";

export default function Error({ variant, displayText, error }) {
  return (
    <Alert variant={variant}>
      <FiFrown className="d-block" />
      {displayText}
      <br />
      {error}
    </Alert>
  );
}
