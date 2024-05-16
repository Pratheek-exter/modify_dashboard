import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  UserAddOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

const handleAboutClick = () => {
  const route = useRouter();
};

const items: MenuItem[] = [
  getItem(<nav>
    <Link onClick={handleAboutClick} href={'/'}>Dashboard</Link>
</nav>, '1', <PieChartOutlined />),

  getItem('BSS', 'sub1', <ContainerOutlined />, [
      getItem(<nav>
          <Link onClick={handleAboutClick} href={'/admin/BSS/rider'}>
            <UserAddOutlined /> Rider 
          </Link>
        </nav>, '3')]), 
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
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default FormData;