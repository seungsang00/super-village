import React from 'react'
import styled from "styled-components"

const Div = styled.div`
  left: ${props => props.x};
  bottom: ${props => props.y};
`;

export default function ChatTooltip({User}) {

  return (
    <Div className="chatTooltip" x={User.position.x - 75 + 'px'} y={User.position.y + 10 + 'px'}>
      <div  className="chatTooltipText">{User.message}</div>
      <Div className="triangleToolTip" x={70 + 'px'} y={-10 + 'px'} />
    </Div>
  )
}
