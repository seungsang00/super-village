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
 * 아까 움직이는 부분(더이상 못간다 이런거)도 메서드로 만들어서 유저끼리 못 부딪히게
 *
 */

const Map = () => {
  const nextUserId = useRef(4);
  const myUserId = useRef(null);
  const [users, setUsers] = useState(initialUsers);
  const handleUserButtonClick = () => {
    // add new user annoy & me
    const newId = nextUserId.current;
    myUserId.current = myUserId.current || newId;

    userFuncs.addNewUser(
      nextUserId.current,
      `user${nextUserId.current}`,
      users,
      setUsers
    );

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
      <button
        style={{
          width: '120px',
          height: 'auto',
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
        onClick={handleUserButtonClick}
      >
        입장
      </button>
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
