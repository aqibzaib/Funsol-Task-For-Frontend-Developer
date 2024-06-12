import "./App.css";

import CreationsPage from "./page/CreationsPage";
import MainPage from "./page/MainPage";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/text-to-image" element={<CreationsPage />} />
      </Routes>
    </>
  );
}

export default App;
