import css from '../style.module.css';
import SidebarItems from './SidebarItems';
import { SidebarHeader } from './SidebarHeader';
import { useDashboardContext } from '../Provider';

type SidebarProps = {
  mobileOrientation: 'start' | 'end';
};

const style = {
  mobileOrientation: {
    start: 'right-0',
    end: 'left-0 ',
  },
  container: 'pb-32 lg:pb-6',
  close: 'hidden lg:block lg:w-64 lg:z-auto',
  open: 'w-8/12 absolute z-40 sm:w-5/12 lg:hidden',
  default: 'bg-white h-screen overflow-y-auto top-0 lg:relative',
};

export function Sidebar(props: SidebarProps) {
  const { isOpen } = useDashboardContext();
  return (
    <aside
      className={`${style.default} 
        ${style.mobileOrientation[props.mobileOrientation]} 
        ${isOpen ? style.open : style.close} ${css.scrollbar}`}
      style={{ borderRadius: '16px' }} // Inline style for rounded corners
    >
      <div className={style.container}>
        <SidebarHeader />
        <SidebarItems />
      </div>
    </aside>
  );
}
