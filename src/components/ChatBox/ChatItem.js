import React, { useRef, useEffect } from 'react'

const ChatItem = ({username, message}) => {
  const newItem = useRef(null)

  const scrollToBottom = () => {
    newItem.current.scrollIntoView()
  }

  useEffect(() => {
    scrollToBottom()
  })

  return (
    <div ref={newItem} className="ChatItemContainer">
      {username ? <span className="ChatName">{username} : </span> : '' }
      {message ? <span className='ChatMsg'>{message}</span> : ''}
    </div>
  )
}

export default ChatItem