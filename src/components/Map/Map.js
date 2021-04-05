import './App.css';
import './App.scss';
import { useState, useRef, useEffect } from 'react';
import User from '../User';
import ChatBox from '../ChatBox/ChatBox';
import ChatTooltip from '../ChatBox/ChatTooltip';
//
import userFuncs from '../../utils/UserFuncs';
import { initialUsers } from '../../assets/initialUsers';

/** TODO:
 * 새로운 유저가 접속 시 myUser가 등장 & setUsers로 추가 (지금은 클릭시 생기게 해놓음)
 * 키코드랑 백그라운드 포지션을 객체나 배열에 담아서 여러번 else if 하지 말고 한번에 사용할 수 있게 ==> 하나의 메서드로 만들자
 * 아까 움직이는 부분(더이상 못간다 이런거)도 메서드로 만들어서 유저끼리 못 부딪히게
 * 유저를 생성하는 부분도 함수로 만들어주자
 * 하드코딩한 부분도 상수값을 변수로 할당해서 의미 파악하게 하자 (100 => mapwidth)
 *
 */

const Map = () => {
  const nextUserId = useRef(4);
  const myUserId = useRef(null);
  const [users, setUsers] = useState(initialUsers);
  window.onclick = () => {
    // add new user annoy & me
    const newUser = {
      id: nextUserId.current,
      username: `user${nextUserId.current}`,
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
      backgroundPos: {
        x: -5,
        y: 70,
      },
      isConnect: false,
    };
    const newId = nextUserId.current;
    myUserId.current = myUserId.current || newId;
    setUsers({
      ...users,
      [newId]: newUser,
    });
    nextUserId.current++;
  };

  window.onkeydown = (e) => {
    if (myUserId.current) {
      userFuncs.handleUserMoving(
        myUserId.current,
        users[myUserId.current],
        e.keyCode,
        users,
        setUsers
      );
      userFuncs.handleUserConnect(
        Object.values(users),
        users[myUserId.current]
      );
    }
  };

  /*
   * chatBox Logics
   */
  // chatbox visible boolean state (on user avatar)

  // chatbox handler ()
  const handleGetMessage = (e) => {
    if (myUserId.current) {
      setUsers((state) => ({
        ...state,
        [myUserId.current]: {
          ...state[myUserId.current],
          message: e,
        },
      }));
    }
  };

  return (
    <div className="map">
      {Object.values(users).map((user) => (
        <>
          {user.id === myUserId.current ? <ChatTooltip user={user} /> : ''}
          <User user={user} key={user.id} isMe={user.id === myUserId.current} />
        </>
      ))}
      {myUserId.current && (
        <ChatBox
          user={users[myUserId.current]}
          onGetMessage={handleGetMessage}
        />
      )}
    </div>
  );
};

export default Map;
