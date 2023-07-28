import React from 'react';
import { Header } from './Header';

export const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <main>
            <div className="mx-auto max-w-screen-2xl p-4" style={{height:'calc(100vh - 64px)', overflow:'hidden'}}>
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
