import { ResultResponse } from '@/types/ResultResponse';
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react';

export const ResultCard = ({
  result,
}: {
  result: ResultResponse;
}) => {
  const router = useRouter();
  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg"
      style={{ cursor: 'pointer', height: '300px' }}
      onClick={() => router.push(`details/${result.title}`)}
    >
      <div>
        <img
          className="m-auto"
          style={{ height: '230px' }}
          src={`${result.coverImage}`}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="relative px-6 mt-2 flex">
        <div className="text-sm mb-2">{result.title}</div>
      </div>
      <div className="relative px-6 flex">
        <div className="font-bold text-[red] text-sm mb-2">
          {result.discountRate}%
        </div>
        <div className="font-bold text-md mb-2 absolute right-0 w-16">
          {result.price} 원
        </div>
      </div>
    </div>
  );
};
