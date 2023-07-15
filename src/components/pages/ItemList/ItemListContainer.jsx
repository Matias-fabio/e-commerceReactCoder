import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const [titulo, setTitulo] = useState("Productos");

  const { category } = useParams();

  useEffect(() => {
    let productosRef = collection(db, "productos");
    let consulta;

    if (category) {
      consulta = query(productosRef, where("category", "==", category));
    } else {
      consulta = productosRef;
    }

    getDocs(consulta)
      .then((res) => {
        let products = res.docs.map((elemento) => {
          return {
            ...elemento.data(),
            id: elemento.id,
          };
        });
        setProductos(products);
      })
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
