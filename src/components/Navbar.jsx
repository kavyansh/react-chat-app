import { useUsersContext } from "../contexts/Context";

function Navbar() {
  const { currentUser } = useUsersContext();

  return (
    <div className="navbar">
      <span className="logo">React Chat</span>
      <div className="user">
        <img src={currentUser.avatar} alt="" />
        <span>{currentUser.name}</span>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
