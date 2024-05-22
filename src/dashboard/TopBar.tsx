import { useDashboardContext } from './Provider';
import Image from 'next/image';

export function TopBar() {
  const { isOpen, toggleSidebar } = useDashboardContext();

  return (
    <header className="relative z-10 h-16 w-full bg-white shadow md:h-20 lg:rounded-2xl">
      <div className="relative mx-auto flex h-full items-center justify-between px-3">
        <div className="flex items-center">
          <button
            type="button"
            aria-expanded="false"
            aria-label="Toggle sidenav"
            className="text-4xl text-gray-500 focus:outline-none"
            onClick={toggleSidebar}
            style={{ paddingBottom: '9px' }}
          >
            &#8801;
          </button>
          {isOpen && (
            <div className="ml-4">
              <Image 
              src={'/exter_logo.png'}
              width={10}
              height={10}
              alt="Logo" 
              className="h-12 w-auto" />
            </div>
          )}
        </div>
        <div className="flex items-center flex-1 justify-end">
          <div className="relative w-full max-w-xs lg:max-w-md">
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 fill-current text-gray-500 group-hover:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
            </svg>
            <input
              type="text"
              className="block w-full rounded-2xl bg-gray-100 py-1.5 pl-10 pr-4 leading-normal text-gray-400 opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search"
            />

          </div>
        </div>
      </div>
    </header>
  );
}
