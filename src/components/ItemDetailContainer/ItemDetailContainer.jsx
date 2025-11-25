import { useEffect, useState} from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";

export const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  // Capturo el id de la URL dinámica
  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((data) => setDetail(data))
      .catch((err) => console.log(err));
  }, [id]); // Array de dependencias

  return (
    <main className="detail-container">
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando...</p>
      )}
    </main>
  );
};