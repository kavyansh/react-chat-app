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
}) {
  const ref = useRef();
  const { setReplyingToText } = useUsersContext();

  useEffect(
    function () {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    },
    [message]
  );

  function handleReplyText() {
    setReplyingToText(message);
  }

  return (
    <div ref={ref} className={`message ${type === "sent" ? "owner" : ""}`}>
      <div className="messageInfo">
        <img src={avatar} alt="" />
        <span>{time}</span>
      </div>
      <div className="messageContent">
        {repliedTo && <span className="repliedToText">{repliedTo}</span>}
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
