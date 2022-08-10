import "./App.css";
import Layout from "./layout/Layout";

import { Routes, Route } from "react-router-dom";
import Tables from "./pages/Tables";
import Forms from "./pages/Forms";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/forms" element={<Forms />} />
        <Route path="/tables" element={<Tables />} />
      </Routes>
    </Layout>
  );
}

export default App;
