import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";
import { FaCartShopping } from "react-icons/fa6";
const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <Link className="Cart" to="/carrito">
        <span className="numerito">{cantidadEnCarrito()}</span>
        <FaCartShopping />
      </Link>
    </div>
  );
};

export default CartWidget;
