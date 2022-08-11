import "./App.css";
import Layout from "./layout/Layout";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={"Home Page"} />
      </Routes>
    </Layout>
  );
}

export default App;
