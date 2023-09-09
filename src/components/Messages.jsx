import { useLocation, useParams } from "react-router-dom";
import { useUsersContext } from "../contexts/Context";
import Message from "./Message";

function Messages() {
  const { chats, currentUser, activeUser } = useUsersContext();
  const location = useLocation();
  const params = useParams();

  let currentChatId = `${currentUser.id}_${activeUser.id}`;

  if (location?.pathname?.includes("chat")) {
    currentChatId = params.id;
  }

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
          threadedChat={chat.threadedChat}
        />
      ))}
    </div>
  );
}

export default Messages;
