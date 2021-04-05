/**
 * @param {*} user 유저 객체 = myUser
 * @param {*} direction 이동 방향(x 또는 y) 문자열
 * @param {*} distance 이동거리 ( left||up < 0 , right||down > 0 )
 * @param {*} endPoint 유저가 더이상 이동할 수 없는 Map의 가장자리 좌표
 * @returns user의 새로운 위치좌표
 */
const newPosition = (user, direction, distance, endPoint) => {
  if (endPoint === 0) {
    return user.position[direction] + distance > endPoint
      ? user.position[direction] + distance
      : user.position[direction];
  } else {
    return user.position[direction] + distance < endPoint
      ? user.position[direction] + distance
      : user.position[direction];
  }
};

/**
 * @param {*} myuserId Map 단에서 useRef로 가지고 있는 myUserId.current 값
 * @param {*} user myUser 객체
 * @param {*} keyCode 방향키 keyCode. 좌: 37, 우: 39, 상: 38, 하: 40
 * @param {*} users 전체 유저 객체를 담은 배열 (state)
 * @param {*} setUsers users 상태변경함수
 */
const handleUserMoving = (myuserId, user, keyCode, users, setUsers) => {
  const move = {
    37: {
      backgroundPos: { x: 50, y: 60 },
      position: { x: newPosition(user, 'x', -50, 0), y: user.position.y },
    },
    39: {
      backgroundPos: { x: -5, y: 0 },
      position: { x: newPosition(user, 'x', 50, 840), y: user.position.y },
    },
    38: {
      backgroundPos: { x: 55, y: 10 },
      position: { x: user.position.x, y: newPosition(user, 'y', -50, 0) },
    },
    40: {
      backgroundPos: { x: -5, y: 70 },
      position: { x: user.position.x, y: newPosition(user, 'y', 50, 540) },
    },
  };

  if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
    setUsers({
      ...users,
      [myuserId]: {
        ...user,
        position: move[keyCode].position,
        backgroundPos: move[keyCode].backgroundPos,
      },
    });
  }
};

const handleUserConnect = (users, myUser, distance = 100) => {
  const connected = users.filter((user) => {
    return (
      Math.abs(user.position.x - myUser.position.x) < distance &&
      Math.abs(user.position.y - myUser.position.y) < distance
    );
  });
  users.forEach((user) => {
    connected.includes(user)
      ? (user.isConnect = true)
      : (user.isConnect = false);
  });
};

const addNewUser = (id, username, users, setUsers) => {
  // 새로운 유저 객체 생성
  const newUser = {
    id,
    username,
    position: { x: Math.random() * 500, y: Math.random() * 500 },
    backgroundPos: { x: -5, y: 70 },
    isConnect: false,
  };
  // users 상태에 추가
  setUsers({
    ...users,
    [id]: newUser,
  });
};

const userFuncs = {
  handleUserMoving,
  handleUserConnect,
  addNewUser,
};

export default userFuncs;
