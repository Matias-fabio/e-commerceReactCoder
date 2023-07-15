import { Link } from "react-router-dom";
import CartWidget from "../../common/CartWidget";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>Mi Tienda Online</h1>
      </Link>
      <ul className="menu">
        <li>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
