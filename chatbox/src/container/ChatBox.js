import React, {useState, useEffect} from 'react'
import ChatInput from '../components/chat/ChatInput'
import ChatItem from '../components/chat/ChatItem'
import Resizeable from './Resizeable'

export default function ChatBox({ User, onGetMessage}) {
  const [ Chatlist, setChatlist] = useState([{id :1, name: null, message : "채팅에 참여 하였습니다."}]);
  
  const handleGetMessage = (e) =>  {
    setChatlist((list) => {
      if(e) {
        onGetMessage(e);
        return [
          ...list,
          {
            id : list[list.length -1].id + 1,
            name : User.name,
            message : e,
          }
        ]
      } else {
        return [...list];
      }
    })
  }

  const [ isStartChat, setIsStartChat] = useState(false);

  const handleKeyDown = (e) => (
    setIsStartChat((state) => {
      if(e.key === "Enter") {
        if(state === false) {
          return true;
        } else {
          return false;
        }
      }
      return state;
    })
  )

  useEffect(() => {
    window.addEventListener ('keydown', handleKeyDown)
    return () => {
      window.removeEventListener ('keydown', handleKeyDown)
    }
  }, [])

  
  return (
    <Resizeable>
    <div className='ChatBoxContainer'>
      <div className="scroll" >
      {
        Chatlist.map((ChatContent) => {
          const { id, name, message } = ChatContent;
          return <ChatItem className='ChatItem' key={id} name={name} message={message} />
        })
      }
      </div>
      {
        isStartChat ? <ChatInput onGetMessage={handleGetMessage} /> : ""
      }
    </div>
    </Resizeable>
  )
}
