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

const handleUserMoving = (myuserId, user, keyCode, users, setUsers) => {
  // 유저 이동 state 변경
  if (keyCode === 37) {
    // 왼쪽
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
    // 오른쪽
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
    // 위
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
    // 아래
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

const handleUserConnect = (users, myUser) => {
  const connected = users.filter((user) => {
    return (
      Math.abs(user.position.x - myUser.position.x) < 100 &&
      Math.abs(user.position.y - myUser.position.y) < 100
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
