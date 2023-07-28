import { resultState } from '@/atoms/Result';
import { Results } from '@/components/Results';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Home() {
   const [searchResult, setSearchResult] = useRecoilState(resultState);
   const listInnerRef = useRef();
   const [currPage, setCurrPage] = useState(1);
   const [prevPage, setPrevPage] = useState(0);
   const [lastList, setLastList] = useState(false);

   useEffect(() => {
     const fetchData = async () => {
       const response = await axios.get(
         `http://localhost:3000/api/getData/?page=${currPage}`
       );
       if (!response.data.hasNext) {
         setLastList(true);
         return;
       }
       setPrevPage(currPage);
       setSearchResult([...searchResult, ...response.data.data]);
     };
     if (!lastList && prevPage !== currPage) {
       fetchData();
     }
   }, [currPage, lastList, prevPage]);

   const onScroll = () => {
     if (listInnerRef.current) {
       const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
       if (scrollTop + clientHeight === scrollHeight) {
         setCurrPage(currPage + 1);
       }
     }
   };
  

  return (
    <div>
      <Results
        onScroll={onScroll}
        listInnerRef={listInnerRef}
        searchResult={searchResult}
      />
    </div>
  );
}
