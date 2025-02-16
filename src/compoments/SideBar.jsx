import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "../contexts/PostContext";
import styles from "./SideBar.module.css";

function SideBar() {
  const navigate = useNavigate();
  const { data } = useDataContext();
  const { subject } = useParams();

  console.log(data["subElements"]);
  return (
    <>
      <aside className={styles.side}>
        {!subject ? (
          <div>
            <h2>☝️</h2>
          <h4>Select what you want to study 👩‍🎓👨‍🎓</h4>
          </div>
        ) : (
          data["subElements"]?.map((el) => (
            <button key={el} onClick={() => navigate(`/src/${subject}/${el}`)}>
              {el}
            </button>
          ))
        )}
      </aside>
    </>
  );
}

export default SideBar;
