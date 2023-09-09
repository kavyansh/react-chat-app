import Sidebar from "./../components/Sidebar";
import Chat from "./../components/Chat";
import { useUsersContext } from "../contexts/Context";
import ThreadedView from "../components/ThreadedView";

function Home() {
  const { threadedViewOpened, threadedChat } = useUsersContext();

  console.log("threaded:", threadedChat);

  return (
    <div className="home">
      <div className="homeContainer">
        {threadedViewOpened === true ? (
          <ThreadedView threadedChat={threadedChat} />
        ) : (
          <Sidebar />
        )}

        <Chat />
      </div>
    </div>
  );
}

export default Home;
