import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Form, Input, Checkbox, Button } from 'antd';

import AppLayout from '../components/AppLayout';
import useinput from '../hooks/useinput';
import Password from 'antd/lib/input/Password';

const ErrorMessage = styled.div`
  color: red; 
`;
const Signup = () => {
    const [id, onChangeId] = useinput('');
    const [nickname, onChangeNickname] = useinput('');
    const [password, onChangePassword] = useinput('');
    const [passwordCheck, setpasswordCheck] = useState('');
    const [passwordError, setpasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setpasswordCheck(e.target.value);
        setpasswordError(e.target.value !== password);
    }, [password]);

    const [term, setterm] = useState('');
    const [termError, settermError] =useState(false);
    const onchangeTerm = useCallback((e) => {
        setterm(e.target.checked);
        settermError(false);
    }, []);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
          return setpasswordError(false);
        }
        if (!term) {
          return settermError(true);
        }
        console.log(id, nickname, password);
    }, [password, passwordCheck, term]);
   
    return (
        <AppLayout>
            <Head>
                <meta charSet="utf-8" />
                <title>회원가입</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} required onChange={onChangeId} />

                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name="user-id" value={nickname} required onChange={onChangeNickname} />

                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />

                </div>
                <div>
                    <label htmlFor="user-password=check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck}
                    /> 
                    {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onchangeTerm}>말 잘듣기로 약속.</Checkbox>
                    {termError && <div style={{color: 'red'}}>동의해라.</div>}
                </div>
                <div style={{ marginTop: 10}}>
                    <Button type="primary" htmlType="submit">가입하기</Button>
                </div>
            </Form>            
        </AppLayout>)
}

export default Signup;