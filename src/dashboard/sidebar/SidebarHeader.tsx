import  Image from 'next/image';

export function SidebarHeader() {
  return (
    <div className="sticky top-0 z-10 flex items-center justify-center bg-white py-6">
      <Image 
      src={'/exter-logo-1.png'} 
      alt={'logo'}
      width={110}
      height={110}        
      />
    </div>
  );
};
