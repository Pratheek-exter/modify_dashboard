import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'grp',
    label: 'exter Stats',
    type: 'group',
    children: [
      { key: '13', label: 'Dashboard' },
    ],
  },
  {
    key: 'sub1',
    label: 'BSS',
    icon: <MailOutlined />,
    children: [
      {
        key: 'g1',
        label: 'Registeration',
        type: 'group',
        children: [
          { key: '1', label: 'Rider-Registeration' },
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
