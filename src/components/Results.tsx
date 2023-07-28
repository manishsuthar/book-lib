import React, { Ref } from 'react';
import { ResultCard } from './ResultCard';
import { ResultResponse } from '@/types/ResultResponse';

export const Results = ({
  onScroll,
  listInnerRef,
  searchResult,
}: {
  onScroll: () => void;
  listInnerRef: Ref<any>;
  searchResult: ResultResponse[];
}) => {
  return (
    <div className="px-2">
      <div
        className="container m-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        onScroll={onScroll}
        ref={listInnerRef}
        style={{ height: '100vh', overflowY: 'auto' }}
      >
        {searchResult.map((e: ResultResponse, i: number) => (
          <ResultCard key={`iii${i}`} result={e} />
        ))}
      </div>
    </div>
  );
};
