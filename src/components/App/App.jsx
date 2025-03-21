import AppHeader from "../AppHeader/AppHeader";
import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "../../Pages/HomePage.jsx";
import UsersPage from "../../Pages/UsersPage.jsx";
import NotFoundPage from "../../Pages/NotFoundPage.jsx";
import UserDetailsPage from "../../Pages/UserDetailsPage.jsx";
import UserPosts from "../UserPosts/UserPosts.jsx";
import UserTodos from "../UserTodos/UserTodos.jsx";

export default function App() {
  return (
    <>
      <AppHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<UsersPage />} />

        <Route path="/dashboard/:userId" element={<UserDetailsPage />}>
          <Route path="todos" element={<UserTodos />} />
          <Route path="posts" element={<UserPosts />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
