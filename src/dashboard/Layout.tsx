'use client';
import React from 'react';
import { TopBar } from './TopBar';
import { Overlay } from './Overlay';
import { Sidebar } from './sidebar/Sidebar';
import { DashboardProvider, useDashboardContext } from './Provider';

type ContentProps = {
  children: React.ReactNode;
};

const style = {
  open: 'lg:w-full',
  close: 'lg:pl-4 lg:w-[calc(100%-16rem)]',
  mainContainer: 'flex flex-col w-full h-full lg:space-y-2',
  container: 'bg-gray-100 h-screen overflow-auto relative lg:p-3',
  main: 'h-screen overflow-auto pb-36 pt-8 px-2 md:pb-8 md:pt-4 lg:pt-0',
  dynamicContainer: 'flex-1 bg-white rounded-lg shadow-md p-3', // Increased padding for better spacing
};

function DynamicContainer({ children }: ContentProps) {
  return (
    <div className={style.dynamicContainer}>
      {children}
    </div>
  );
}

function Content(props: ContentProps) {
  const { isOpen } = useDashboardContext();
  return (
    <div className={style.container}>
      <div className="flex h-full">
        <Sidebar mobileOrientation="end" />
        <div
          className={`${style.mainContainer} 
             ${isOpen ? style.open : style.close}`}
        >
          <TopBar />
          <DynamicContainer>
            {props.children}
          </DynamicContainer>
        </div>
      </div>
      <Overlay />
    </div>
  );
}

export function DashboardLayout(props: ContentProps) {
  return (
    <DashboardProvider>
      <Content>{props.children}</Content>
    </DashboardProvider>
  );
}
