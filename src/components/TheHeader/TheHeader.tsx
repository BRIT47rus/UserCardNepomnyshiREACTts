import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import styles from './TheHeaderProps.module.scss'


const TheHeader  = () => (
 <div className={styles.header}>
    <div className={styles.logo}>
      devfinder
    </div>
    <ThemeSwitcher/>
 </div>
);

export default TheHeader;
