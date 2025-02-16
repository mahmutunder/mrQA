import styles from "./NavBar.module.css";
import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <div className={styles.top}>
        <h1>Learning</h1>
      </div>
      <div>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
