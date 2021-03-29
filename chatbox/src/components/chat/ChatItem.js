import React, { useRef, useEffect } from 'react'

export default function ChatItem ({name, message}) {
  const newItem = useRef(null)

  const scrollToBottom = () => {
    newItem.current.scrollIntoView()
  }

  useEffect(() => {
    scrollToBottom()
  })

  return (
    <div ref={newItem} className="ChatItemContainer">
      {
        message
        ? name ?(<><span className="ChatName">{name} : </span><span className="ChatMsg">{message}</span></>) : <span className='ChatMsg'>{message}</span>
        : ''
      }
    </div>
  )
}
