import { fetchUsers } from "../userService.js";
import UserList from "../components/UserList/UserList.jsx";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "use-debounce";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const [debounceQuery] = useDebounce(query, 1000);

  const changeSearchText = (event) => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.set("query", event.target.value);
    setSearchParams(nextParams);
  };

  useEffect(() => {
    async function getUsers() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchUsers(debounceQuery);
        setUsers(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getUsers();
  }, [debounceQuery]);
  return (
    <div>
      <input type="text" value={query} onChange={changeSearchText} />
      {isLoading && <b>Loading users...</b>}
      {error && <b>Whoops something wrong...</b>}
      {users.length > 0 && <UserList users={users} />}
    </div>
  );
}
