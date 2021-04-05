/**
 * @param {*} user 유저 객체 = myUser
 * @param {*} direction 이동 방향(x 또는 y) 문자열
 * @param {*} idx dxy 배열의 인덱스 값. 왼쪽/위쪽으로 이동 시 0, 오른쪽/아래쪽으로 이동 시 1
 * @param {*} endPoint 유저가 더이상 이동할 수 없는 Map의 가장자리 좌표
 * @returns user의 새로운 위치좌표
 */
const newPos = (user, direction, idx, endPoint) => {
  const dxy = [-50, 50];
  // 방향(x,y) idx(0,1) , endpoint(x:0~840,y:0~540)
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

/**
 * @param {*} myuserId Map 단에서 useRef로 가지고 있는 myUserId.current 값
 * @param {*} user myUser 객체
 * @param {*} keyCode 방향키 keyCode. 좌: 37, 우: 39, 상: 38, 하: 40
 * @param {*} users 전체 유저 객체를 담은 배열 (state)
 * @param {*} setUsers users 상태변경함수
 */
const handleUserMoving = (myuserId, user, keyCode, users, setUsers) => {
  if (keyCode === 37) {
    setUsers({
      ...users,
      [myuserId]: {
        ...user,
        position: {
          x: newPos(user, 'x', 0, 0),
          y: user.position.y,
        },
        backgroundPos: {
          x: 50,
          y: 60,
        },
      },
    });
  } else if (keyCode === 39) {
    setUsers({
      ...users,
      [myuserId]: {
        ...user,
        position: {
          x: newPos(user, 'x', 1, 840),
          y: user.position.y,
        },
        backgroundPos: {
          x: -5,
          y: 0,
        },
      },
    });
  } else if (keyCode === 38) {
    setUsers({
      ...users,
      [myuserId]: {
        ...user,
        position: {
          x: user.position.x,
          y: newPos(user, 'y', 0, 0),
        },
        backgroundPos: {
          x: 55,
          y: 10,
        },
      },
    });
  } else if (keyCode === 40) {
    setUsers({
      ...users,
      [myuserId]: {
        ...user,
        position: {
          x: user.position.x,
          y: newPos(user, 'y', 1, 540),
        },
        backgroundPos: {
          x: -5,
          y: 70,
        },
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

const userFuncs = {
  newPos,
  handleUserMoving,
  handleUserConnect,
};

export default userFuncs;
