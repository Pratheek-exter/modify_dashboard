import React from 'react';
import {  ShopOutlined, PieChartOutlined, UserAddOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1',
   icon: <PieChartOutlined />,
    label: 'Option 1' },
  {
    key: 'sub1',
    label: 'BSS',
    icon: <ShopOutlined />,
    children: [
      {
        key: 'g1',
        type: 'group',
        children: [
          { key: '1', label: 'Rider-Registeration', icon: <UserAddOutlined />, link: '/BSS/rider'} as MenuItemType,
        ],
      }
        
    ]
    
  },

];
  
const formData: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default formData;
