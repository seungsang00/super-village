import React from 'react'
import styled from "styled-components"

const Div = styled.div`
  left: ${props => props.x};
  top: ${props => props.y};
`;

export default function ChatTooltip({user}) {

  return (
    <Div className="chatTooltip" x={user.position.x - 60 + 'px'} y={user.position.y - 70 + 'px'}>
      <div  className="chatTooltipText">{user.message}</div>
      <Div className="triangleToolTip" x={70 + 'px'} y={ 45+ 'px'} />
    </Div>
  )
}
