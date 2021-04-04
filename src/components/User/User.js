import React from 'react';
import styled from 'styled-components';
import '../../img/user1.png';

const UserDiv = styled.div`
  /* 크기 */
  width: 60px;
  height: 60px;
  /* 배경 */
  border: 1px solid red;
  background-image: url(https://images.velog.io/images/seungsang00/post/28ae8285-70d9-414f-8446-2e6adc2a8ab3/user1.png);
  /* 위치 */
  position: absolute;
`;
// 받아와야 할 데이터 : 유저의 현재 위치좌표, 키보드 이벤트 핸들러(좌표 변경)
// 유저가 움직이게 하려면 window 객체에 키보드 이벤트를 걸어줘야 하나?
// 그럼 특정 유저는??--> 나만 움직이면 되니까 id로 구분
const checkUserPosition = (user) => {
  console.log(`id:`, user.id);
  console.log(`position:`, user.position.x, user.position.y);
};
function User({ user, isMe }) {
  const { username, position, backgroundPos, isConnect } = user;
  // console.log(user)
  return (
    <UserDiv
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        backgroundPosition: `${backgroundPos.x}px ${backgroundPos.y}px`,
      }}
      onClick={() => {
        checkUserPosition(user);
      }}
    >
      <span
        style={{
          color: `${isConnect ? `red` : isMe ? `red` : `#606060`}`,
        }}
      >
        {username}
      </span>
    </UserDiv>
  );
}

export default User;
