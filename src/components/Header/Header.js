import './Header.css';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, children }) {
  return (
    <header className={isLoggedIn ? "header" : "header__dark"}>
      <Link className="logo" to="/"></Link>
      {children}
    </header>
  );
}

export default Header;
