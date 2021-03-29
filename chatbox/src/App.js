import './App.scss';
import ChatBox from './container/ChatBox'
import ChatTooltip from './container/ChatTooltip'
import React, {useState, useEffect} from 'react'
import img from './임시.jpeg'


function App() {
  const [User, setUser] = useState({
    name: '최정훈',
    position: {
      left : 500,
      top : 500,
    }
  })
  const [isVisible, setIsVisible] = useState({state:false, timeOutID: null,});

  const handleGetMessage = (e) => {
    setUser({
      ...User,
      message: e,
    });
  }

  useEffect(() => {
    setIsVisible((state) => {
      if(state.timeOutID) {
        clearTimeout(state.timeOutID);
      }
      if(User.message) {
        return ({
          ...isVisible,
          state: true,
          timeOutID : setTimeout(() => {
            setIsVisible({
              ...isVisible,
              state :false,
              timeOutID: null,
            })
          }, 3000)
        })
      } else {
        return state
      }
    });
  }, [User])

  return (
    <div className="App">
      <img className="backGroundImg" src={img} ></img>
      {
        isVisible.state ? <ChatTooltip User={User} /> : ''
      }
      <ChatBox User={User} onGetMessage={handleGetMessage} />
    </div>
  );
}

export default App;
