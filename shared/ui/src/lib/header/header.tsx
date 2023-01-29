import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  appName: string;
  menus: string[]
}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['header']}>
      <span className={styles['header__app-name']}>{props.appName}</span>
      <div className={styles['header__menus']}>
        {props.menus.map((menu) => (
          <span>{menu}</span>
        ))}
      </div>
    </div>
  );
}

export default Header;