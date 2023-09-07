import Img from "../img/img.png";
import Attach from "../img/attach.png";
import { useState } from "react";
import { useUsersContext } from "../contexts/Context";
import { formatAMPM } from "../utils/helpers";
import { getDummyMsg } from "../services/dummyReply";

function Input() {
  const [text, setText] = useState("");
  const { addChat, replyingText, setReplyingToText } = useUsersContext();

  function handleKey(e) {
    if (e.code === "Enter") {
      handleSend();
    }
  }

  async function handleSend() {
    if (text === "") return;

    const newMessage = {
      type: "sent",
      message: text,
      time: formatAMPM(new Date()),
      repliedTo: replyingText !== "" ? replyingText : "",
    };

    setText("");
    addChat(newMessage);

    const dummyRes = await getDummyMsg(text);

    if (dummyRes) {
      const responseMessage = {
        type: "received",
        message: dummyRes,
        time: formatAMPM(new Date()),
      };
      addChat(responseMessage);
    }
    setReplyingToText("");
  }

  return (
    <div className="input">
      {replyingText && (
        <div className="replyingText">
          {replyingText}
          <span className="deleteReply" onClick={() => setReplyingToText("")}>
            x
          </span>
        </div>
      )}

      <input
        type="text"
        name=""
        id=""
        placeholder="Type something..."
        value={text}
        onKeyDown={handleKey}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="send">
        <img src={Attach} alt="" />
        <input id="file" type="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>send</button>
      </div>
    </div>
  );
}

export default Input;
