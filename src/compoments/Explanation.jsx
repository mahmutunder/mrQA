import { useParams } from "react-router-dom"
import styles from './Explanation.module.css'
import { useDataContext } from "../contexts/PostContext";


function Explanation() {
    const {data}=useDataContext();

  
    console.log(data["subElements"]);
    // console.log("here",(data['explanations'])['div'])
    const {subElement}=useParams();
    return (

        <div className={styles.rightSide}>
           
            <h1>{subElement ? subElement?.toUpperCase() : "hello"}</h1>

            {subElement ?  (data['explanations'])[subElement] :"select element"}
        </div>
    )
}

export default Explanation
