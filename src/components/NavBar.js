import { Link } from 'react-router-dom';
import logo from '../amd-advanced-micro-devices-white.svg';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <ul className="nav-links">
        <Link className="link-style" to="/">
          <li>Home</li>
        </Link>
        <Link className="link-style" to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="link-style" to="/cart">
          <li>
            <u>
              Cart{' '}
              {Object.values(props.checkOut).reduce(
                (prev, curr) => prev + curr
              )}
            </u>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
