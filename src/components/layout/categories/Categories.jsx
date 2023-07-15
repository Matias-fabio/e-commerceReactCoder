import "./Categories.css";
import {
  FaHouse,
  FaMobile,
  FaTablet,
  FaTv,
  FaHeadphones,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <div className="categorias">
        <div className="container">
          <div className="categoria-container">
            <Link to="/">
              <FaHouse size="1.25rem" color="rgba(49, 24, 78, 0.671)" />
            </Link>
          </div>
          <h3>Todos</h3>
        </div>
        <div>
          <div className="categoria-container">
            <Link to="/Productos/Celulares">
              <FaMobile size="1.25rem" color="rgba(49, 24, 78, 0.671)" />
            </Link>
          </div>
          <h3>Celulares</h3>
        </div>
        <div>
          <div className="categoria-container">
            <Link to="/Productos/Tablets">
              <FaTablet size="1.25rem" color="rgba(49, 24, 78, 0.671)" />
            </Link>
          </div>
          <h3>Tablets</h3>
        </div>
        <div>
          <div className="categoria-container">
            <Link to="/Productos/Accesorios">
              <FaHeadphones size="1.25rem" color="rgba(49, 24, 78, 0.671)" />
            </Link>
          </div>
          <h3>Accesorios</h3>
        </div>
        <div>
          <div className="categoria-container">
            <Link to="/Productos/Tv">
              <FaTv size="1.25rem" color="rgba(49, 24, 78, 0.671)" />
            </Link>
          </div>
          <h3>Smart TV</h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
