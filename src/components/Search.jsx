import { useRef, useState } from "react";
import { useUsersContext } from "../contexts/Context";
import useOutsideClick from "../hooks/useOutsideClick";
import SearchMessage from "./SearchMessage";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [searchMsg, setSearchMsg] = useState([]);
  const { users, activeUser, currentUser, changeActiveUser, chats } =
    useUsersContext();
  const searchBox = useRef(null);
  const { clickedOutside } = useOutsideClick(searchBox, closeSearchedUser);

  function closeSearchedUser() {
    setUser("");
  }

  function handleSearch() {
    if (!username) {
      setUser("");
      setSearchMsg([]);
      return;
    }

    const searchedUser = users
      .filter((user) => user.id !== currentUser.id)
      .find((user) => user.name.toLowerCase() === username.toLowerCase());

    if (searchedUser) {
      setUser(searchedUser);
    }

    const searchedMessages = chats.reduce((acc1, chat) => {
      const msgs = chat.messages.reduce((acc2, msg) => {
        return msg.message.includes(username)
          ? [...acc2, { id: chat.id, message: msg.message }]
          : acc2;
      }, []);
      if (msgs.length > 0) {
        return [...acc1, ...msgs];
      }
      return acc1;
    }, []);

    if (searchedMessages.length > 0) {
      setSearchMsg(searchedMessages);
    }
  }

  function handleKey(e) {
    if (e.code === "Enter") handleSearch();
    else {
      setUser("");
      setSearchMsg([]);
    }
  }

  function handleUserClick() {
    setUser("");
    setSearchMsg([]);

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
        {searchMsg.map((msg) => {
          return (
            <div onClick={handleUserClick}>
              <SearchMessage
                key={msg.id}
                userid={msg.id}
                message={msg.message}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
