import styles from "./NavBar.module.css";
import NavBar from "./NavBar";
import { useParams } from "react-router-dom";

function Header() {
  const {subject}=useParams();
  return (
    <header>
      <div className={styles.top}>
        <h1>📚 Learning {subject ? subject.toUpperCase() : ""}</h1>
      </div>
      <div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
