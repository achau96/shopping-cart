import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link className="link-style" to="/">
          <li>Home</li>
        </Link>
        <Link className="link-style" to="/shop">
          <li>Shop</li>
        </Link>
        <Link className="link-style" to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
