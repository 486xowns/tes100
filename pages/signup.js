import React from 'react';
import Head from 'next/head'
import AppLayout from '../components/AppLayout';

const Signup = () => {
  return (
    <>
      <Head>
        <title>회원가입</title>
      </Head>
      <AppLayout>
        <dev>회원가입 페이지</dev>
      </AppLayout>
    </>
  )
}

export default Signup;