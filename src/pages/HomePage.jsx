import { Link } from "react-router-dom"
import styles from './HomePage.module.css'

function HomePage() {
    return (
        <main className={styles.main}>
            <h1>Welcome to Learning Platform MR. QA</h1>
            <ul>
                <li>
                    <Link to="/src">Let's Start to Learn</Link>
                </li>
            </ul>
            
        </main>
    )
}

export default HomePage
