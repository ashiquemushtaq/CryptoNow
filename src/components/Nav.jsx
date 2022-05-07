import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <span className="logo">CryptoNow</span>
      <a
        href="https://github.com/ashiquemushtaq"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} color="#FFD700" />
      </a>
    </nav>
  );
};

export default Navbar;
