import { useContext, useState } from "react";
import ItemCount from "../Item/ItemCount";
import { CartContext } from "../../../context/CartContext";
import "./ItemDetail.css";
const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="containerItemDetail">
      <div className="producto-detalle">
        <h3 className="titulo">{item.title}</h3>
        <img className="containerImage" src={item.img} alt={item.title} />
        <p className="descripcion">{item.description}</p>
        <div className="containerDetail">
          <p className="precio">${item.price}</p>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => {
              agregarAlCarrito(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
