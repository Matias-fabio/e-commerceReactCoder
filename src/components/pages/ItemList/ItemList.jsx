import Item from "../Item/Item";

const ItemList = ({ productos, title }) => {
  return (
    <div className="container">
      <h2 className="main-title">{title}</h2>
      <div className="productos">
        {productos.map((prod) => {
          return <Item producto={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
