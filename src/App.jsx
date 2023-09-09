import Home from "./pages/Home";
import "./style.scss";
import UsersContextProvider from "./contexts/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "./components/Messages";

function App() {
  return (
    <UsersContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Messages />} />
        </Routes>
      </BrowserRouter>
    </UsersContextProvider>
  );
}

export default App;
