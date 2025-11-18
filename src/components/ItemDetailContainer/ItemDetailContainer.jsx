import { useEffect, useState} from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  // Capturo el id de la URL dinámica
  const { id } = useParams();

  useEffect(() => {
    // fetch("/data/products.json")
    fetch("https:///691a278f9ccba073ee95086c.mockapi.io/products")
      .then((res) => {
        if (!res.ok) {
          throw new Error("No se encontro el producto");
        }
        return res.json();
      })
      .then((data) => {
        const found = data.find((p) => p.id === id);
        if (found) {
          setDetail(found);
        } else {
          throw new Error("Producto no encontrado");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]); // Array de dependencias

  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
};