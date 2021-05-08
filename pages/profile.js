import React from 'react';
import Head from 'next/head'
import AppLayout from '../components/AppLayout';

const profile = () => {
  return (
    <>
      <Head>
        <title>회원정보</title>
      </Head>
      <AppLayout>회원정보</AppLayout>
    </>
  )
}

export default profile;