import React, { useState, useEffect } from 'react'
import styled from "styled-components"

const Div = styled.div`
  left: ${props => props.x};
  top: ${props => props.y};
`;

export default function ChatTooltip({user}) {
  const [isVisible, setIsVisible] = useState({state:false, timeOutID: null});
  useEffect(()=>{
    setIsVisible((state) => {
      if(state.timeOutID) {
        clearTimeout(state.timeOutID);
      }
      return ({
        ...state,
        state: true,
        timeOutID : setTimeout(() => {
          console.log('call timeout')
          setIsVisible({
            state :false,
            timeOutID: null,
          })
        }, 3000)
      })
    });
  },[user.message])
  if (!isVisible.state) return ''
  return (
    <Div className="chatTooltip" x={user.position.x - 60 + 'px'} y={user.position.y - 70 + 'px'}>
      <div className="chatTooltipText">{user.message}</div>
      <Div className="triangleToolTip" x={70 + 'px'} y={ 45+ 'px'} />
    </Div>
  )
}
