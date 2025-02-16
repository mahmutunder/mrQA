import { useNavigate, useParams } from "react-router-dom";
import { useDataContext } from "../contexts/PostContext";
import styles from "./SideBar.module.css";
import { useState } from "react";

function SideBar() {
  const navigate = useNavigate();
  const { data } = useDataContext();
  const { subject } = useParams();
  const [activeButton, setButton] = useState(null);

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
            <button
              key={el}
              onClick={() => {
                setButton(el)
                navigate(`/src/${subject}/${el.trim()}`);
      
              }}
              className={(el===activeButton) ? styles.active : ""}
              
            >
              {el}
            </button>
          ))
        )}
      </aside>
    </>
  );
}

export default SideBar;
