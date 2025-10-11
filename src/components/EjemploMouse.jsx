import { useState } from "react";

export default function EjemploMouse() {
  const [hover, setHover] = useState(false);

  return (
    <div
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          style={{
              width: "200px",
              height: "100px",
              backgroundColor: hover ? "red" : "blue",
              textAlign: "center",
              lineHeight: "100px",
          }}
    >
      
      {hover ? "🖱️ Hover!!" : "Sin hover"}
     
    </div>
  );
}