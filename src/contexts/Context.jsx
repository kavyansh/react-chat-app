import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

const userContext = createContext();

const initialState = {
  users: [
    {
      name: "Yash",
      avatar:
        "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      id: 1,
    },
    {
      name: "Shilpa",
      avatar:
        "https://plus.unsplash.com/premium_photo-1687485794590-27778432a7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      id: 2,
    },
    {
      name: "Rahul",
      avatar:
        "https://images.unsplash.com/photo-1453574503519-1ae2536262ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      id: 3,
    },
    {
      name: "Rohit",
      avatar:
        "https://images.unsplash.com/photo-1542093174-d4a3529eae61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1233&q=80",
      id: 4,
    },
    {
      name: "Ashvini",
      avatar:
        "https://images.unsplash.com/photo-1491440305722-061438e1cdc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      id: 5,
    },
  ],
  chats: [
    {
      id: "1_5",
      messages: [
        { type: "sent", message: "Hi", time: "5 PM" },
        { type: "received", message: "Bye, tc", time: "5:30 PM" },
      ],
    },
    {
      id: "1_2",
      messages: [
        { type: "sent", message: "you there?", time: "1:20 PM" },
        {
          type: "received",
          message: "Let's go out for a dinner today",
          time: "6:50 PM",
          attachmentImg: "https://source.unsplash.com/random/400x500/?burger",
        },
      ],
    },
    {
      id: "1_3",
      messages: [
        { type: "sent", message: "Hi", time: "5:20 PM" },
        { type: "received", message: "Ciao", time: "5:22 PM" },
      ],
    },
    {
      id: "1_4",
      messages: [
        { type: "sent", message: "Hi", time: "3:30 PM" },
        { type: "received", message: "Have a nice day", time: "5:40 PM" },
      ],
    },
    {
      id: "1_5",
      messages: [
        { type: "sent", message: "Hi", time: "4:30 PM" },
        { type: "received", message: "Alright...", time: "5:00 PM" },
      ],
    },
  ],

  currentUser: {
    name: "Yash",
    avatar:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    id: 1,
  },
  activeUser: {
    name: "Rahul",
    avatar:
      "https://images.unsplash.com/photo-1453574503519-1ae2536262ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    id: 3,
  },

  replyingText: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "userAdded":
      return { ...state, users: [...state.users, action.payload] };

    case "activeUserChanged":
      return { ...state, activeUser: action.payload };

    case "messageAddedToChat":
      let currentChat = state.chats.find(
        (chat) => chat.id === `${state.currentUser.id}_${state.activeUser.id}`
      );
      currentChat.messages.push(action.payload);

      let newChats = state.chats.filter(
        (chat) => chat.id !== action.payload.id
      );

      newChats.push(currentChat);

      return {
        ...state,
        chats: newChats,
      };

    case "repliedToText":
      return { ...state, replyingText: action.payload };

    default:
      throw new Error("Unkown Action.");
  }
}

function UsersContextProvider({ children }) {
  const [{ users, chats, currentUser, activeUser, replyingText }, dispatch] =
    useReducer(reducer, initialState);

  const changeActiveUser = useCallback(function changeActiveUser(id) {
    dispatch({ type: "activeUserChanged", payload: id });
  });

  const addChat = useCallback(function addChat(chat) {
    console.log(chat);
    dispatch({ type: "messageAddedToChat", payload: chat });
  });

  const setReplyingToText = useCallback(function setReplyingToText(text) {
    console.log("reply text", text);
    dispatch({ type: "repliedToText", payload: text });
  });

  const sharedGlobalState = useMemo(function () {
    return {
      users,
      currentUser,
      chats,
      changeActiveUser,
      activeUser,
      replyingText,
      addChat,
      setReplyingToText,
    };
  });

  return (
    <userContext.Provider value={sharedGlobalState}>
      {children}
    </userContext.Provider>
  );
}

export function useUsersContext() {
  const context = useContext(userContext);
  if (!context) throw new Error("Context used outside provider");

  return context;
}

export default UsersContextProvider;
