import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/src" element={<MainPage />} />
        <Route path="/src/:subject" element={<MainPage />} />
        <Route path="/src/:subject/:subElement" element={<MainPage />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
    </>
  );
}

export default App;
