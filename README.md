**React Chat App** Instructions to run the code.

1. Clone repo - https://github.com/kavyansh/react-chat-app
2. Run command “npm install”
3. Run command “npm run dev”
4. Go to url - <http://localhost:5173/>

Live Link - https://magical-semolina-06a9a1.netlify.app/

Code Structure

The code is divided into multiple folders in src directory

1. Pages - containing main structural components for each page (in this case only Home page)
1. Components

This is having all the reusable components built for the chat app

1. Sidebar - a structural component to contain Navbar, Search, and Chats list components
1. Chat - the main structural component representing chat window. It contains Messages (components where all the messages are shown), each message is represented by Message component, Input - Component where user can write any message and send it to the user.
3. Contexts This is having all the global contexts used in the application
3. Hooks Containing custom hooks used in application
3. Img Having img assets
3. Services Having necessary service clients for remote state
3. Utils

General usage helper functions

**Note:** the code is extensible, to add a group chat we need to change the message type as group and in backend if a message is send via group type the active user(user whom we are sending the message) will be a group and all the previous message by any other user should be returned.

Terminology -

1. currentUser - the user who is logged in and sending message to other users
1. activeUser - the user whose chat is opened and currentUser can send message to him/her
1. Chats - list of chats with people in the sidebar by clicking them you can send more messages in the main chat window.

Future Scope -

1. To add image attachment with image
1. To add group chat support
1. To add file attachment support
1. Video call

Screenshots -

![Aspose Words 7fbc34d8-0d07-4467-aba0-00fc109bfeb0 001](https://github.com/kavyansh/react-chat-app/assets/41780487/71141907-283f-4c00-8fb7-668470a46f18)

Replying to a text

![Aspose Words 7fbc34d8-0d07-4467-aba0-00fc109bfeb0 002](https://github.com/kavyansh/react-chat-app/assets/41780487/0b6305df-0710-4032-bfe0-f73a2ba761b8)


Replied text -

![Aspose Words 7fbc34d8-0d07-4467-aba0-00fc109bfeb0 003](https://github.com/kavyansh/react-chat-app/assets/41780487/e6d2b6d8-ef7d-4e67-a583-0f0fb7d1cb5c)

Tech Stack

1. React
1. Sass
1. Vite
1. JS and HTML
