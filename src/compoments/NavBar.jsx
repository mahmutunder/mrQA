import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/src/html">HTML</NavLink>
        </li>
        <li>
          <NavLink to="/src/js">JavaScript</NavLink>
        </li>
        <li>
          <NavLink to="/src/react">React</NavLink>
        </li>
        <li>
          <NavLink to="/src/git">Git commends</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
