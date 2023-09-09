import { useUsersContext } from "../contexts/Context";
import Message from "./Message";

function ThreadedMessages({ threadedChat }) {
  const { currentUser, activeUser } = useUsersContext();

  return (
    <div className="messages threadedMessages">
      {threadedChat?.map((chat) => (
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

export default ThreadedMessages;
