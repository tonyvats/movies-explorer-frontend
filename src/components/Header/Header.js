import './Header.css';
import logo from '../../images/logo.svg';

function Header({ isLoggedIn, children }) {
  return (
    <header className={isLoggedIn ? "header__dark" : "header"}>
      <img className="logo" src={logo} alt="Логотип сайта"></img>
      {children}
    </header>
  );
}

export default Header;
