import { Navigate, Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import PageLayout from "./pages/PageLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
