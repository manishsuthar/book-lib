import Link from 'next/link';
import React from 'react';

export const Header = () => {
  return (
    <header className="sticky top-0 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center  gap-2 sm:gap-4">
          <Link
            className="block text-center text-[20px] flex-shrink-0"
            href="/"
          >
            Books
          </Link>
        </div>
        <div className="flex items-center gap-3 2xsm:gap-7">
          <span className='h-[30px] w-[30px]'>
            <img src="./img.png" />
          </span>
        </div>
      </div>
    </header>
  );
};
