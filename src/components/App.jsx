import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout.jsx";

// import HomePage from "../pages/HomePage/HomePage.jsx";
// import RegisterPage from "../pages/RegisterPage/RegisterPage.jsx";
// import LoginPage from "../pages/LoginPage/LoginPage.jsx";
// import TasksPage from "../pages/TasksPage/TasksPage.jsx";

const HomePage = lazy(() => import("../pages/HomePage/HomePage.jsx"));
const RegisterPage = lazy(() =>
  import("../pages/RegisterPage/RegisterPage.jsx")
);
const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage.jsx"));
const TasksPage = lazy(() => import("../pages/TasksPage/TasksPage.jsx"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/tasks" element={<TasksPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

// export default function App() {
//   return (
//     <>
//       <p>Hello</p>
//     </>
//   );
// }
