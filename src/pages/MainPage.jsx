import Header from "../compoments/Header";
import SideBar from "../compoments/SideBar";
import { PostProvider } from "../contexts/PostContext";

function MainPage() {
  return (
    <div className="headerTop">
      <PostProvider>
        <Header />
        <SideBar />
      </PostProvider>
    </div>
  );
}

export default MainPage;
