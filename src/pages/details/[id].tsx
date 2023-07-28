import { Detail } from '@/components/Detail';
import { ResultResponse } from '@/types/ResultResponse';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useContext } from 'react';

export default function Details(props: { data: ResultResponse }) {
  return (
    <div>
      <Detail result={props.data} />
    </div>
  );
}

export async function getServerSideProps(context: GetServerSideProps) {
  const response = await axios.get(`http://localhost:3000/api/getData/?page=1`);
  return {
    props: {
      data: response.data.data[0],
    },
  };
}
