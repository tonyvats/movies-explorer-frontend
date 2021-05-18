import './Header.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header(props) {

  return (
    <header className={props.isMainPage ? "header__dark" : "header"}>
      <Link className="logo" to="/"></Link>
      <Navigation isLoggedIn={props.isLoggedIn} />
    </header>
  );
}

export default Header;
