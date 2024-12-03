import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Landing from "./components/Landing";

export default function App() {
  return (
    <Routes>
      {/* path = "/" -> root URL */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
      </Route>
    </Routes>
  );
}
