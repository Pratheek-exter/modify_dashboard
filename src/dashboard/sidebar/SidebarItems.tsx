import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { data } from './data';

interface subItem {
  title: string;
  link: string;
}

const style = {
  title: 'font-normal mx-4 text-sm',
  active:
    'bg-gradient-to-r border-r-4 border-blue-500 border-r-4 border-blue-500 from-white to-blue-100 text-blue-500',
  link: 'duration-200 flex font-thin items-center justify-start my-2 p-4 transition-colors text-gray-500 uppercase w-full lg:hover:text-blue-500',
};

const SidebarItem = ({ item }: { item: any }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  return (
    <li key={item.title}>
      <div
        className={`${style.link} ${
          item.link === usePathname() && style.active
        }`}
        onClick={item.subItems ? toggleSubMenu : undefined}
      >
        <span>{item.icon}</span>
        <span className={style.title}>{item.title}</span>
        {item.subItems && (
          <span className="cursor-pointer">{isSubMenuOpen ? '-' : '+'}</span>
        )}
      </div>
      {item.subItems && isSubMenuOpen && (
        <ul className="pl-4"> {/* Apply padding for sub-menu items */}
          {item.subItems.map((subItem: subItem) => (
            <li key={subItem.title}>
              <Link href={subItem.link}>
                <span
                  className={`${style.link} ${
                    subItem.link === usePathname() && style.active
                  }`}
                >
                  <span className={style.title}>{subItem.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const renderSubMenu = (subItems: subItem[]) => (
  <ul className="pl-4"> {/* Apply padding for sub-menu items */}
    {subItems.map((subItem) => (
      <li key={subItem.title}>
        <Link href={subItem.link}>
          <span className={style.link}>{subItem.title}</span>
        </Link>
      </li>
    ))}
  </ul>
);

export function SidebarItems() {
  const pathname = usePathname();

  return (
    <ul>
      {data.map((item) => (
        <li key={item.title}>
          <Link href={item.link}>
            <span

              className={`${style.link} ${
                item.link === pathname && style.active
              }`}
            >
              <span>{item.icon}</span>
              <span className={style.title}>{item.title}</span>
            </span>
          </Link>
          {item.subItems && item.subItems.length > 0 && renderSubMenu(item.subItems)}
        </li>
      ))}
    </ul>
  );
}
