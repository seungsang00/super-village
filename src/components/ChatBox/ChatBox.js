import React, {useState, useEffect} from 'react'
import ChatInput from './ChatInput'
import ChatItem from './ChatItem'
import Resizeable from './Resizeable'

const ChatBox = ({ user, onGetMessage}) => {
  const [ chatList, setChatlist] = useState([{id :1, username: null, message : "채팅에 참여 하였습니다."}]);
  
  const handleGetMessage = (e) =>  {
    setChatlist((list) => {
      if(e) {
        onGetMessage(e);
        return [
          ...list,
          {
            id : list[list.length -1].id + 1,
            username : user.username,
            message : e,
          }
        ]
      } else {
        return [...list];
      }
    })
  }

  const [ isStartChat, setIsStartChat] = useState(false);

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      setIsStartChat((state) => !state)
    }
  }

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
          chatList.map((ChatContent) => {
            const { id, username, message } = ChatContent;
            return <ChatItem className='ChatItem' key={id} username={username} message={message} />
          })
        }
        </div>
        { isStartChat && <ChatInput onGetMessage={handleGetMessage} /> }
      </div>
    </Resizeable>
  )
}

export default ChatBox