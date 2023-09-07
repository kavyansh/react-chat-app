import Home from "./pages/Home";
import "./style.scss";
import UsersContextProvider from "./contexts/Context";

function App() {
  return (
    <UsersContextProvider>
      <Home />
    </UsersContextProvider>
  );
}

export default App;
