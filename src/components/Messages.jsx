import { useUsersContext } from "../contexts/Context";
import Message from "./Message";

function Messages() {
  const { chats, currentUser, activeUser } = useUsersContext();

  const currentChatId = `${currentUser.id}_${activeUser.id}`;

  const currentChat = chats.find((chat) => chat.id === currentChatId)?.messages;

  return (
    <div className="messages">
      {currentChat?.map((chat) => (
        <Message
          key={chat.id}
          time={chat.time}
          type={chat.type}
          message={chat.message}
          attachmentImg={chat.attachmentImg}
          avatar={chat.type === "sent" ? currentUser.avatar : activeUser.avatar}
          repliedTo={chat.repliedTo}
        />
      ))}
    </div>
  );
}

export default Messages;
