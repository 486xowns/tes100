import React, {useCallback} from 'react';
import { Card, Avatar, Button} from 'antd';
import LoginForm from './LoginForm';
import PropTypes from 'prop-types';

const UserProfile = ({setIsLoggedIn}) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  },[]);
  return (
    <Card
     actions={[
       <div key="twit">twit<br/>0</div>,
       <div key="followings">followings<br/>0</div>,
       <div key="followers">followers<br/>0</div>,
     ]}
    >
      <Card.Meta
       avatar={<Avatar>ZC</Avatar>}
       title="ZeroCho"
       />
       <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

LoginForm.PropTypes = {
  setIsLoggedIn: PropTypes.func.isrequired,
}

export default UserProfile;