import './App.css';
import './App.scss';
import { useState, useRef, useEffect } from 'react';
import User from '../User';
import ChatBox from '../ChatBox/ChatBox';
import ChatTooltip from '../ChatBox/ChatTooltip';
//
import userFuncs from '../../utils/UserFuncs';
/** 메모장
 * 방향키별 배경이미지 포지션 --done
 * left(37): [-5,0], right(39): [50, 60], up(38): [55, 10], down(40): [-5, 70]
 * 유저들끼리 만나면 만났다는걸 인지하게 하기 --> 유저의 위치정보를 이용 --done (수정 필요)
 */
/** TODO:
 * 새로운 유저가 접속 시 myUser가 등장 & setUsers로 추가 (지금은 클릭시 생기게 해놓음)
 * 키코드랑 백그라운드 포지션을 객체나 배열에 담아서 여러번 else if 하지 말고 한번에 사용할 수 있게 ==> 하나의 메서드로 만들자
 * 아까 움직이는 부분(더이상 못간다 이런거)도 메서드로 만들어서 유저끼리 못 부딪히게
 * 유저를 생성하는 부분도 함수로 만들어주자
 * 하드코딩한 부분도 상수값을 변수로 할당해서 의미 파악하게 하자 (100 => mapwidth)
 * 파일을 분리...?
 *
 */

const Map = () => {
  const nextUserId = useRef(4);
  const myUserId = useRef(null);
  const [users, setUsers] = useState({
    1: {
      id: 1,
      username: 'user1',
      position: {
        x: 500,
        y: 500,
      },
      backgroundPos: {
        x: -5,
        y: 70,
      },
      isConnect: false,
    },
    2: {
      id: 2,
      username: 'user2',
      position: {
        x: 200,
        y: 200,
      },
      backgroundPos: {
        x: -5,
        y: 70,
      },
      isConnect: false,
    },
    3: {
      id: 3,
      username: 'user3',
      position: {
        x: 600,
        y: 50,
      },
      backgroundPos: {
        x: -5,
        y: 70,
      },
      isConnect: false,
    },
  });
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
