import { ResultResponse } from '@/types/ResultResponse';
import React from 'react';

export const Detail = ({
  result,
}: {
  result: ResultResponse;
}) => {
  return (
    <div style={{ cursor: 'pointer', height: '100vh' }}>
      <div>
        <img
          className="m-auto"
          style={{ height: 'auto', width: '100%' }}
          src={`${result.coverImage}`}
          alt="Sunset in the mountains"
        />
      </div>
      <div className="relative px-6 mt-2 flex">
        <div className="text-[16px] font-bold mb-2">{result.title}</div>
      </div>
      <div className="relative px-6 mt-2 flex">
        <div className="text-[16px] font mb-2">{result.description}</div>
      </div>
      <div className="relative px-6 flex">
        <div className="font-bold text-[14px] text-[red] mb-2">
          {result.discountRate}%
        </div>
        <div className="font-bold text-[14px] mb-2 absolute right-0 w-16">
          {result.price} 원
        </div>
      </div>
    </div>
  );
};
