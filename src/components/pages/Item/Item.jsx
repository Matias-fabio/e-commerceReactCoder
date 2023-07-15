import { Link } from "react-router-dom";
import "./Item.css";
const Item = ({ producto }) => {
  return (
    <Link className="ver-mas" to={`/item/${producto.id}`}>
      <main className="products">
        <div className="productos">
          <div className="container-card">
            <img src={producto.img} alt={producto.title} />
            <div>
              <span>{producto.title}</span>
            </div>
            <div className="product-price">
              <h3>${producto.price} </h3>
            </div>
          </div>
        </div>
      </main>
    </Link>
  );
};

export default Item;
