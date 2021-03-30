import './App.css';
import { useState, useRef } from 'react';
import User from './components/User';
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

function App() {
  const handleUserConnect = (users, myUser) => {
    const connected = users.filter((user) => {
      return (
        Math.abs(user.position.x - myUser.position.x) < 100 &&
        Math.abs(user.position.y - myUser.position.y) < 100
      );
    });
    users.map((user) => {
      return connected.includes(user)
        ? (user.isConnect = true)
        : (user.isConnect = false);
    });
    console.log(`가까운 유저 목록`, connected);
  };
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
  const handleUserMoving = (user, keyCode) => {
    // check user position
    const dxy = [-50, 50];
    const newPos = (direction, idx, endPoint) => {
      if (endPoint === 0) {
        return user.position[direction] + dxy[idx] > endPoint
          ? user.position[direction] + dxy[idx]
          : user.position[direction];
      } else {
        return user.position[direction] + dxy[idx] < endPoint
          ? user.position[direction] + dxy[idx]
          : user.position[direction];
      }
    };
    if (keyCode === 37) {
      // 왼쪽
      setUsers({
        ...users,
        [myUserId.current]: {
          ...user,
          position: {
            x: newPos('x', 0, 0),
            y: user.position.y,
          },
          backgroundPos: {
            x: 50,
            y: 60,
          },
        },
      });
    } else if (keyCode === 39) {
      // 오른쪽
      setUsers({
        ...users,
        [myUserId.current]: {
          ...user,
          position: {
            x: newPos('x', 1, 840),
            y: user.position.y,
          },
          backgroundPos: {
            x: -5,
            y: 0,
          },
        },
      });
    } else if (keyCode === 38) {
      // 위
      setUsers({
        ...users,
        [myUserId.current]: {
          ...user,
          position: {
            x: user.position.x,
            y: newPos('y', 0, 0),
          },
          backgroundPos: {
            x: 55,
            y: 10,
          },
        },
      });
    } else if (keyCode === 40) {
      // 아래
      setUsers({
        ...users,
        [myUserId.current]: {
          ...user,
          position: {
            x: user.position.x,
            y: newPos('y', 1, 540),
          },
          backgroundPos: {
            x: -5,
            y: 70,
          },
        },
      });
    }
  };
  window.onkeydown = (e) => {
    handleUserMoving(users[myUserId.current], e.keyCode);
    handleUserConnect(Object.values(users), users[myUserId.current]);
  };
  return (
    <div className="map">
      {Object.values(users).map((user) => (
        <User user={user} key={user.id} isMe={user.id === myUserId.current} />
      ))}
    </div>
  );
}

export default App;
