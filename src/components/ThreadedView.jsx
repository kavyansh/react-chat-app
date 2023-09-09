import ThreadedMessages from "./ThreadedMessages";

function ThreadedView({ threadedChat }) {
  return (
    <div className="sidebar">
      <ThreadedMessages threadedChat={threadedChat} />
    </div>
  );
}

export default ThreadedView;
