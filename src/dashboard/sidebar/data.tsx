import { DocIcon } from './icons/DocIcon';
import { HomeIcon } from './icons/HomeIcon';
import { TaskIcon } from './icons/TaskIcon';
import { ReportIcon } from './icons/ReportIcon';
import { ProjectIcon } from './icons/ProjectIcon';
import { SettingsIcon } from './icons/SettingsIcon';
import { CalendarIcon } from './icons/CalendarIcon';
import { TimeManageIcon } from './icons/TimeManageIcon';
import { title } from 'process';
import { link } from 'fs';

export const data = [
  {
    title: 'Dashboard',
    icon: <HomeIcon />,
    link: '/',
  },
  {
    title: 'BSS',
    icon: <ProjectIcon />,
    link: '/admin/BSS',
    subItems: [
      {
        title: "Rider",
        link: "/admin/BSS/rider"
      },
    ]
  },
  {
    title: 'My tasks',
    icon: <TaskIcon />,
    link: '/admin/tasks',
  },
  {
    title: 'Files',
    icon: <CalendarIcon />,
    link: '/admin/calendar',
  },
  {
    title: 'Reports',
    icon: <ReportIcon />,
    link: '/admin/reports',
  },
  {
    title: 'Settings',
    icon: <SettingsIcon />,
    link: '/admin/settings',
  },
  {
    title: 'Documentation',
    icon: <DocIcon />,
    link: '/admin/documentation',
  },
];
