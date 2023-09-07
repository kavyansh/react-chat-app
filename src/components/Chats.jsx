import { useUsersContext } from "../contexts/Context";

function Chats() {
  const { users, chats, currentUser } = useUsersContext();

  return (
    <div>
      {users &&
        users
          .filter((user) => user.id !== currentUser.id)
          .map((user) => (
            <User
              key={user.id}
              currentUserId={currentUser.id}
              user={user}
              chats={chats}
            />
          ))}
    </div>
  );
}

function User({ user, currentUserId }) {
  const { chats, changeActiveUser } = useUsersContext();

  const currentChatId = `${currentUserId}_${user.id}`;
  let lastMessage = chats
    .slice()
    .find((chat) => chat.id === currentChatId)
    ?.messages?.slice(-1)?.[0]
    ?.message?.slice(0, 24);

  function handleClick() {
    changeActiveUser(user);
  }

  return (
    <div className="userChat" onClick={handleClick}>
      <img
        src={user.avatar !== "" ? user.avatar : `${user.name.slice(0, 2)}`}
        alt=""
      />
      <div className="userChatInfo">
        <span>{user.name}</span>
        <p>{lastMessage.length >= 24 ? lastMessage + "..." : lastMessage}</p>
      </div>
    </div>
  );
}

export default Chats;
