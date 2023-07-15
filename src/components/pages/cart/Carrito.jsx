import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { useContext } from "react";
import { Button } from "@mui/material";
import Swal from "sweetalert2";

const Carrito = () => {
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };
  const limpiar = () => {
    Swal.fire({
      title: "Seguro quieres limpiar el carrito?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, limpiar",
      denyButtonText: `No, cancelar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire("Carrito limpio", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El carrito queda como estaba", "", "info");
      }
    });
  };

  return (
    <div className="container">
      <h1 className="main-title">Carrito</h1>

      {carrito.map((prod) => (
        <div key={prod.id}>
          <br />
          <h3>{prod.title}</h3>
          <img className="img-carrito" src={prod.img} alt={prod.title} />
          <p>Precio total: ${prod.price * prod.cantidad}</p>
          <p>Cantidad de producto: {prod.cantidad}</p>
          <br />
        </div>
      ))}

      {carrito.length > 0 ? (
        <>
          <h2>El total del carrito es: ${precioTotal()}</h2>
          <Button variant="contained" onClick={limpiar}>
            Vaciar
          </Button>

          <Link to="/checkout">Finalizar compra</Link>
        </>
      ) : (
        <h2>El carrito está vacío :</h2>
      )}
    </div>
  );
};

export default Carrito;
