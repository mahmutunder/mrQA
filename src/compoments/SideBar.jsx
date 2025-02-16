import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "../contexts/PostContext";
import styles from "./SideBar.module.css";
import Explanation from "./Explanation";

function SideBar() {
  const { data } = useDataContext();
  const navigate = useNavigate();
  const { subject } = useParams();

  console.log(data["subElements"]);
  return (
    <>
      <div className={styles.layOut}>
        <aside className={styles.side}>
          {!data ? (
            <p>No dataeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
          ) : (
            data["subElements"]?.map((el) => (
              <button
                key={el}
                onClick={() => navigate(`/src/${subject}/${el}`)}
              >
                {el}
              </button>
            ))
          )}
        </aside>
        <Explanation />
      </div>
    </>
  );
}

export default SideBar;
