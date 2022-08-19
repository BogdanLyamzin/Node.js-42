import {useState, useEffect} from "react";
import io from "socket.io-client";
import {nanoid} from "nanoid";

import SigninChatForm from './components/SigninChatForm/SigninChatForm';
import ChatForm from './components/ChatForm/ChatForm';
import Chat from './components/Chat/Chat';

import './App.css';

const socket = io.connect("http://localhost:5000");

function App() {
  const [name, setName] = useState();
  const [messages, setMessages] = useState([]);

  const addName = ({name}) => setName(name);
  const addMessage = ({message: msg}) => {
    setMessages(prevMessages => {
      const newMessage = {
        type: "you",
        message: msg,
        id: nanoid()
      }
      return [...prevMessages, newMessage]
    });
    socket.emit("chat message", msg);
  }

  useEffect(()=> {
    // socket.on("connect", ()=> {
    //   console.log("Success connect");
    // })
    socket.on("chat message", (msg) => {
      setMessages(prevMessages => {
        const newMessage = {
          type: "user",
          message: msg,
          id: nanoid()
        }
        return [...prevMessages, newMessage]
      });
    })
  }, [])

  return (
    <div className="App">
      {!name && <SigninChatForm onSubmit={addName} />}
      {name && <ChatForm onSubmit={addMessage} />}
      {name && <Chat items={messages} />}
    </div>
  );
}

export default App;
