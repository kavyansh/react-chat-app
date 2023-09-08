import { useRef, useState } from "react";
import { useUsersContext } from "../contexts/Context";
import useOutsideClick from "../hooks/useOutsideClick";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const { users, activeUser, currentUser, changeActiveUser } =
    useUsersContext();
  const searchBox = useRef(null);
  const { clickedOutside } = useOutsideClick(searchBox, closeSearchedUser);

  function closeSearchedUser() {
    setUser("");
  }

  function handleSearch() {
    if (!username) {
      setUser("");
      return;
    }

    const searchedUser = users
      .filter((user) => user.id !== currentUser.id)
      .find((user) => user.name.toLowerCase() === username.toLowerCase());

    if (searchedUser) {
      setUser(searchedUser);
    }
  }

  function handleKey(e) {
    if (e.code === "Enter") handleSearch();
    else setUser("");
  }

  function handleUserClick() {
    setUser("");

    if (user.id === activeUser.id) return;
    changeActiveUser(user);
  }

  return (
    <div className="search" ref={searchBox}>
      <div className="searchForm">
        <input
          type="text"
          name=""
          id=""
          placeholder="find a user..."
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        {user && (
          <div className="userChat" onClick={handleUserClick}>
            <img src={user.avatar} alt="" />
            <div className="userChatInfo">
              <span>{user.name}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
