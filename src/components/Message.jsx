import { useEffect, useRef } from "react";
import More from "../img/more.png";
import { useUsersContext } from "../contexts/Context";

function Message({
  type,
  message,
  time,
  attachmentImg = "",
  avatar = "",
  repliedTo,
  threadedChat,
}) {
  const ref = useRef();
  const { setReplyingToText, openThreadedChat, setThreadedChat } =
    useUsersContext();

  useEffect(
    function () {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    },
    [message]
  );

  function handleReplyText() {
    setReplyingToText(message);
  }

  function handleSeeAllClick() {
    openThreadedChat();
    setThreadedChat(threadedChat);
  }

  return (
    <div ref={ref} className={`message ${type === "sent" ? "owner" : ""}`}>
      <div className="messageInfo">
        <img src={avatar} alt="" />
        <span>{time}</span>
      </div>
      <div className="messageContent">
        {repliedTo && (
          <>
            <span className="repliedToText">{repliedTo}</span>
            <span onClick={handleSeeAllClick} className="seeAllReplies">
              See all
            </span>
          </>
        )}
        <div className="messageText">
          {!repliedTo && (
            <span onClick={handleReplyText} className="reply">
              reply
            </span>
          )}
          {message}
        </div>
        {attachmentImg && <img src={attachmentImg} alt="" />}
      </div>
    </div>
  );
}

export default Message;
