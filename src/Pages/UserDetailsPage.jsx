import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchUserById } from "../userService";
import UserInfo from "../components/UserInfo/UserInfo";
import { NavLink, Outlet, Link } from "react-router";

export default function UserDetailsPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getUser() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await FetchUserById(userId);
        setUser(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getUser();
  }, [userId]);
  return (
    <div>
      <Link to="/dashboard">Go Back</Link>
      {isLoading && <b>Loading users...</b>}
      {error && <b>Whoops something wrong...</b>}
      {user && <UserInfo user={user} />}
      <ul>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="todos">Todos</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
