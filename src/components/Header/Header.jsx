import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerBlock}>
        <img src={logo} alt="Логотип порталу" width="50" />
        <Link to="/" className={styles.logoLink}>
          NihongoGate
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/learning">Навчальні теми</Link></li>
          <li><Link to="/feedback">Зворотній зв’язок</Link></li>
        </ul>
      </nav>
    </header>
  );
}

