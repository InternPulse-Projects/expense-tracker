import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Text } from "@chakra-ui/react";
import PageLayout from "./pages/PageLayout";

function App() {
  const Dashboard = lazy(() => import("./pages/Dashboard"));

  return (
    <Suspense fallback={<Text>loading...</Text>}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
