import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Spinner = () => {
  return (
    <div className="spinner-div">
      <FontAwesomeIcon className="spinner" icon={faSpinner} color="#F39422" />
    </div>
  );
};

export default Spinner;
