import Header from "../compoments/Header";
import SideBar from "../compoments/SideBar";
import { PostProvider } from "../contexts/PostContext";
import Explanation from "../compoments/Explanation";
import styles from './MainPage.module.css'

function MainPage() {
  return (
    <div className={styles.layout}>
      <PostProvider>
        <div className={styles.headLayout}>
          <Header />
        </div>
        <div className={styles.leftSide}>
          <SideBar />
        </div>
        <div className={styles.explanation}>
          <Explanation />
        </div>
        <div className="test">
          <h1>Test</h1>
        </div>
      </PostProvider>
    </div>
  );
}

export default MainPage;
