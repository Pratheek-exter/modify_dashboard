import React from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  UserAddOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <nav>
      <Link href={'/dashboard'}>Dashboard</Link>
    </nav>, 
    '1', 
    <PieChartOutlined />
  ),

  getItem(
    <nav>
      <Link href={'/dashboard/BSS'}>BSS</Link>
    </nav>,
    'sub1', 
    <ContainerOutlined />, 
    [
      getItem(
        <nav>
          <Link href={'/dashboard/BSS/rider'}>
            <UserAddOutlined /> Rider 
          </Link>
        </nav>, 
        '3'
      )
    ]
  ), 
  {
    key: 'sub2',
    label: 'Navigation Two',
    icon: <AppstoreOutlined />,
    children: [
      { key: '9', label: 'Option 9' },
      { key: '10', label: 'Option 10' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '11', label: 'Option 11' },
          { key: '12', label: 'Option 12' },
        ],
      },
    ],
  },
];

const FormData: React.FC = () => {
  // Removed unused state and useRouter hook

  return (
    <div style={{ width: 256 }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        items={items}
      />
    </div>
  );
};

export default FormData;
