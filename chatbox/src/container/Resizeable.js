import styled from "styled-components"
import React, {useState, useRef, useCallback} from 'react'

const Div = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  position: absolute;
  right: 0px;
  bottom: 0px;
`;

export default function Resizeable({ children }) {
  const [size, setSize] = useState({ x: 250, y: 150 });
  const ref = useRef();

  const handler = useCallback(() => {
    function onMouseMove(e) {
      setSize(currentSize => ({ 
        x: currentSize.x + e.movementX, 
        y: currentSize.y + e.movementY 
      }));
    }
    function onMouseUp() {
      ref.current.removeEventListener("mousemove", onMouseMove);
      ref.current.removeEventListener("mouseup", onMouseUp);
    }
    ref.current.addEventListener("mousemove", onMouseMove);
    ref.current.addEventListener("mouseup", onMouseUp);
  }, []);

  return (
    <Div width={size.x} height={size.y} ref={ref} onMouseDown={handler} >
      {children}
    </Div>
  );
}