import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { Button, TextField } from "@mui/material";
import "./Checkout.css";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");

  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div className="container">
        <h1 className="main-title">Muchas gracias por tu compra</h1>
        <p>Tu número de pedido es: {pedidoId}</p>
      </div>
    );
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit(comprar)}>
        <h2>Checkout</h2>
        <div className="form-items">
          <TextField
            label="Nombre"
            variant="standard"
            name="nombre"
            margin="dense"
          />
        </div>
        <div className="form-items">
          <TextField
            label="Email"
            variant="standard"
            name="email"
            margin="dense"
          />
        </div>
        <div className="form-items">
          <TextField
            label="Pass"
            variant="standard"
            name="password"
            margin="dense"
          />
        </div>
        <div className="form-items">
          <TextField
            label="RepetPass"
            variant="standard"
            name="repetPassword"
            margin="dense"
          />
        </div>
        <div className="form-items">
          <Button type="submit" variant="contained" margin="dense">
            Comprar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
